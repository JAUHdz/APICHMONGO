const express = require("express");


const ControlHorarioSchema  = require("../models/control_horario")
const router = express.Router();

router.post('/control_horario/crear', (req,res)=>{
    const reg = ControlHorarioSchema(req.body);
    reg.save()
    .then((data) => res.json(data))
    .catch((error) => res.json((error)));
});

router.get('/control_horario/consulta', (req,res)=>{
    ControlHorarioSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json((error)));
});

router.put('/control_horario/actualiza/:id', (req,res)=>{
    const {id} = req.params;
    const {id_usuario,fecha,hora_entrada,hora_salida,localizacion} = req.body;
    ControlHorarioSchema
    .updateOne({_id: id},{$set:{ id_usuario,fecha,hora_entrada,hora_salida,localizacion }})
    .then((data) => res.json(data))
    .catch((error) => res.json((error)));
});

router.delete('/control_horario/elimina/:id', (req,res)=>{
    const {id} = req.params;
    ControlHorarioSchema
    .deleteOne({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json((error)));
});

module.exports = router;