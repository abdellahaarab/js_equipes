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

app.get('/api/v1/equipes', GetAllEquipes);

app.get('/api/v1/equipes/:id', RechercheEquipes);

app.post('/api/v1/equipes', AddNewEquipes)

app.put('/api/v1/equipes/:id', EditEquipes)

app.delete('/api/v1/equipes/:id', DeleteEquipes)


app.listen('9000','0.0.0.0',()=>{
    console.log('Server Starting in http://127.0.0.1:9000/')
    console.log('API URL http://127.0.0.1:9000/api/v1/equipes')
});
