const Equipes = require('../Model/equipes')


const GetAllEquipes = (req,res,next)=>{
    Equipes.find({}).then(
            (equipes)=>res.status(200).json(equipes)
        )
    .catch(err=>res.status(400).json(err))
    
}

const RechercheEquipes = (req,res, next)=>{
    const id = req.params.id;
    Equipes.find({_id:id},{}).then(
        (equipes)=>res.status(200).json(equipes)
    )
    .catch(err=>res.status(400).json(err))
}

const AddNewEquipes = (req,res, next)=>{
    Equipes.insertMany([req.body])
        .then(result => res.status(200).json(result))
        .catch(err => res.status(400).json(err))
}

const EditEquipes = (req,res,next)=>{
    const id = req.params.id;
    Equipes.updateOne({_id:id},req.body)
        .then(result => res.status(200).json(result))
        .catch(err => res.status(400).json(err))
}

const DeleteEquipes = (req,res,next)=>{
    const id = req.params.id;
    Equipes.deleteOne({_id:id})
        .then(result=> res.status(200).json({'message':"Deleted success !!"}))
        .catch(err => res.status(400).json({'message':"Not deleted !!"}))
}

module.exports = {GetAllEquipes, RechercheEquipes, AddNewEquipes, EditEquipes,DeleteEquipes};