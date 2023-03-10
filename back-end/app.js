const express = require("express")
const app = express()
const equipes = require('./equipes')
const cors = require('cors')
const mongoose = require("mongoose")


app.use(cors());
mongoose.set('strictQuery',true);

mongoose.connect("mongodb://127.0.0.1:27017/js_equipes",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

app.use(express.json());

app.get('/equipes', (req,res,next)=>{
    try{
        res.status(200).json(equipes);
    }catch(err){
        res.status(400).json(err);
    }
    
});


app.get('/equipes/:id', (req,res, next)=>{
    try{
        const id = req.params.id;
        const equipe = equipes.find( equipe => equipe.id == id);
        res.status(200).json(equipe);
    }catch(err){
        res.status(400).json(err);
    }
});


app.post('/equipes', (req,res, next)=>{
    try{
        const equipe = equipes.push(req.body);
        res.status(200).json(equipe);
    }catch(err){
        res.status(400).json(err);
    }
});

app.put('/equipes/:id', (req,res)=>{
    try{
        const id = req.params.id;
        const equipe = equipes.filter( equipe => equipe.id == id)

        equipe[0].id = req.body.id;
        equipe[0].name = req.body.name;
        equipe[0].contry = req.body.contry;
        res.status(200).json(equipe);

    }catch(err){
        res.status(400).json(err);
    }
})

app.delete('/equipes/:id', (req,res)=>{
    try{
        const id = req.params.id;
        const obj = equipes.find( equipe => equipe.id == id)
        const index = equipes.indexOf(obj)
        const equipe = equipes.splice(index,1)
        res.status(200).json(equipe);
        res.send({'message':"Deleted success !!"})
    }catch(e){
        res.send({'message':"Not deleted !!"})
    }
})


app.listen('9000','0.0.0.0',()=>{
    console.log('Server Starting in http://127.0.0.1:9000/')
});