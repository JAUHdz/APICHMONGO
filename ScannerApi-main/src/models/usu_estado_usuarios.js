const mongoose = require('mongoose');
const UsuusuariosEstadoSchema = mongoose.Schema({
    nom_estado:{
        type: String,
        require
    },
    descripcion_estado:{
        type: String,
        require
    }
});
module.exports = mongoose.model('usu_estado_usuarios',UsuusuariosEstadoSchema);