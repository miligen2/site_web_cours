import express, { query, response } from 'express' // importation de express avec la commande npm i express
import ejs from 'ejs' ;// npm i ejs
import bodyParser from 'body-parser';//must have ??????????????????
import mysql from "mysql2";


const app = express();// creation du variable qui contient express

app.listen('2466');// le site sera lu sur le port 2466 

const conn = mysql.createConnection({
    host:"localhost",
    port: '3306',
    user:"root",
    password:"",
    database:"pizzabd"
})

app.use(express.static('public')); //permet d'utiliser les images css et js de nos pages
app.set('view engine','ejs'); // Indique que le moteur de templates est EJS
app.use(bodyParser.urlencoded({extended:true})); //Permet de récupérer les données du formulaire

//localhost:2466
app.get('/',function(req,res){     // fonction qui permet de recevoir une requete "GET" et de lui envoter une reponse 
    console.log('objet request',req);
    conn.query("SELECT * FROM produits",(err,result)=>{
        console.log(result);
        res.render('pages/index',{produits:result}) // 
    })
});

app.get('/magasin',function(req,res){     
    res.render('pages/magasin') 
});
app.get('/inscription',function(req,res){     
    res.render('pages/inscription') 

});
app.post('/inscription',function(req,res){ 
    const name = req.body.name ;
    const email = req.body.email;
    const psw = req.body.password;
    const vpsw= req.body.confirmpassword;

    conn.query('SELECT email FROM clients WHERE email = ?',[email],(err,result)=>{
        if(err) throw err; 
        if(result.length > 0){
            res.redirect('/connexion');
        }else if (psw === vpsw) {
            conn.execute('INSERT INTO clients (id,nom,email,password) VALUES (NULL,?,?,?)',[name,email,psw],(err,result)=>{
                if (err) throw err;
                res.redirect('/inscsucces');

            })
            conn.unprepare('INSERT INTO clients (id,name,email,password) VALUES (NULL,?,?,?)');

        } 

     })
});
app.get('/inscsucces',function(req,res){     
    res.render('pages/inscsucces') 
});

app.get('/connexion',function(req,res){     
    res.render('pages/connexion') 
});

app.post('/connexion',function(req,res){
    const email = req.body.email;
    const psw = req.body.password;
    conn.query('SELECT email, password FROM clients WHERE email = ? AND password = ?',[email,psw],(err,result)=>{
        if(err)throw err;
        if(result.length > 0){
        res.redirect('/');
    }
   });

});

app.get('/qui_sommes_nous',function(req,res){     
    res.render('pages/footer/qui_sommes_nous') 
});
app.get('/nos_produits',function(req,res){     
    res.render('pages/footer/nos_produits') 
});
app.get('/news',function(req,res){     
    res.render('pages/footer/news') 
});
app.get('/emploi',function(req,res){     
    res.render('pages/footer/emploi') 
});

app.get('/panier',function(req,res){    
    conn.query("SELECT * FROM panier",(err,result)=>{
    console.log(result);
    res.render('pages/panier', {panier:result});
});
})

app.post('/panier',function(req,res){ 
   const id=req.body.id;
   const name=req.body.name;
   const price=req.body.price;
   const quantity=req.body.quantity;
   const image=req.body.image;

   conn.query('INSERT INTO panier ( name, price, quantity) VALUES ( ?, ?, 1)', [ name, price, quantity], function(error, results, fields) {
    if (error) throw error;
    console.log('produit ajouté au panier : ', results);
    res.redirect('/panier');

});
});


