const mongoose = require('mongoose');
const UsuusuariosChSchema = mongoose.Schema({
    nombre:{
        type: String,
        require
    },
    apellido_paterno:{
        type: String,
        require
    },
    apellido_materno:{
        type: String,
        require
    },
    nom_usuario:{
        type: String,
        require
    },
    contrasena:{
        type: String,
        require
    },
    id_usu_tipo:{
        type: String,
        require
    },
    id_usu_estado:{
        type: String,
        require
    }
});
module.exports = mongoose.model('usu_usuarios_ch',UsuusuariosChSchema);