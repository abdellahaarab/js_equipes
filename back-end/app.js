const express = require("express")
const app = express()
const cors = require('cors')
const mongoose = require("mongoose");
const { GetAllEquipes,RechercheEquipes, AddNewEquipes,EditEquipes ,DeleteEquipes } = require("./Controller/equipes");

app.use(express.json());
app.use(cors());
mongoose.set('strictQuery',true);

const URL = "mongodb://127.0.0.1:27017/js_equipes";
mongoose.connect(URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
); 

app.get('/equipes', GetAllEquipes);

app.get('/equipes/:id', RechercheEquipes);

app.post('/equipes', AddNewEquipes)

app.put('/equipes/:id', EditEquipes)

app.delete('/equipes/:id', DeleteEquipes)


app.listen('9000','0.0.0.0',()=>{
    console.log('Server Starting in http://127.0.0.1:9000/')
});