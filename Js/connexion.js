import express from 'express';

const app = express();

app.get('/',function(req,res){
    console.log('objet request',req);
    res.send('Hello world')
});

app.listen('2466');
