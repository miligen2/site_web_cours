const express= require('express'); // importation de express avec la commande npm i express
const ejs = require('ejs') ; // npm i ejs

const app = express();// creation du variable qui contient express

app.use(express.static('public')); //permet d'utiliser les images css et js de nos pages
app.set('view engine','ejs'); // ?

//localhost:2466
app.get('/',function(req,res){     // fonction qui permet de recevoir une requete "GET" et de lui envoter une reponse 
    // console.log('objet request',req); // ? 
    res.render('pages/index') // permet d'afficher la notre page index
});

app.listen('2466');// le site sera lu sur le port 2466 
