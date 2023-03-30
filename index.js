import express, { query, response } from 'express' // importation de express avec la commande npm i express
import ejs from 'ejs' ;// npm i ejs
import bodyParser from 'body-parser';//must have ??????????????????
import mysql from "mysql2";


const app = express();// creation du variable qui contient express

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
            res.render('pages/connexion');
            res.write('vous avez déja un compte :)');
        }else if (psw === vpsw) {
            conn.execute('INSERT INTO clients (id,nom,email,password) VALUES (NULL,?,?,?)',[name,email,psw],(err,result)=>{
                if (err) throw err;
                res.render('pages/connexion');
            })
            conn.unprepare('INSERT INTO clients (id,name,email,password) VALUES (NULL,?,?,?)');

            
        } else {
            res.write('Mot de passe différent')
            console.log(err);
        }

     })
     


    
    //  conn.execute('INSERT INTO clients (id,nom,email,password) VALUES (NULL,?,?,?)',[name,email,psw],(err,result)=>{

    //     if(psw===vpsw){
    //         conn.query('SELECT email FROM clients WHERE email = ?',[email],(err,result)=>{ 
    //             //o nveutverrifier si il a deja un compte 
    //             // si oui renvoyer à la page de connexion avec mesage 
    //             // si non on veut verifier coresspondance des mdp 
    //             //si mdp ok inserer dans la table 
    //             //sinon dire pas bon mdp 

    //             if(err)
    //             {
    //                 throw "Vous avez déja un compte";
    //             }
    //         })
    //     }


    //     if(err===null){
    //         res.render('pages/connexion');
    //         res.write('Votre compte a été créer ')
    //     }else{
         
    //     }

    //  });
    // conn.unprepare('INSERT INTO clients (id,name,email,password) VALUES (NULL,?,?,?)');

        

   
});

app.get('/connexion',function(req,res){     
    res.render('pages/connexion') 
});
app.post('/connexion',function(req,res){
    let client = checkLogin(req.body.login, req.body.mdp)

    res.render('pages/connexion') 
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
    res.render('pages/panier') 
});

app.post('/panier',function(req,res){ 
   // conn.query("INSERT INTO panier() ")
        
    res.render('pages/panier') 
});






app.listen('2466');// le site sera lu sur le port 2466 
