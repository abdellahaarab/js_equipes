const mongoose = require('mongoose');

const EquipesModel = mongoose.Schema({
    name: String,
    contry: String
})

module.exports = Equipes  = mongoose.model('equipe',EquipesModel)

