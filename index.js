import express from 'express' // importation de express avec la commande npm i express
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
app.set('view engine','ejs'); // ?
app.use(bodyParser.urlencoded({extended:true})); //??

//localhost:2466
app.get('/',function(req,res){     // fonction qui permet de recevoir une requete "GET" et de lui envoter une reponse 
    console.log('objet request',req);
    conn.query("SELECT * FROM produits",(err,result)=>{
        res.render('pages/index',{result:result}) // 
    })
});

app.get('/magasin',function(req,res){     
    res.render('pages/magasin') 
});

app.get('/connexion',function(req,res){     
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






app.listen('2466');// le site sera lu sur le port 2466 
