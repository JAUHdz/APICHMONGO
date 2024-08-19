const mongoose = require('mongoose');
const UsuusuariosTipoSchema = mongoose.Schema({
    nom_tipo:{
        type: String,
        require
    },
    descripcion_tipo:{
        type: String,
        require
    }
});
module.exports = mongoose.model('usu_tipo_usuarios',UsuusuariosTipoSchema);