const mongoose = require('mongoose');
const ControlHorarioSchema = mongoose.Schema({
    id_usuario:{
        type: String,
        require
    },
    fecha:{
        type: String,
        require
    },
    hora_entrada:{
        type: String,
        require
    },
    hora_salida:{
        type: String,
        require
    },
    localizacion:{
        type: String,
        require
    },
});
module.exports = mongoose.model('control_horario',ControlHorarioSchema);