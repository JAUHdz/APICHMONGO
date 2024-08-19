const express = require("express");


const UsuusuariosEstadoSchema  = require("../models/usu_estado_usuarios")
const router = express.Router();

router.post('/usu_estado/crear', (req,res)=>{
    const reg = UsuusuariosEstadoSchema(req.body);
    reg.save()
    .then((data) => res.json(data))
    .catch((error) => res.json((error)));
});

router.get('/usu_estado/consulta', (req,res)=>{
    UsuusuariosEstadoSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json((error)));
});

router.put('/usu_estado/actualiza/:id', (req,res)=>{
    const {id} = req.params;
    const {nom_estado, descripcion_estado} = req.body;
    UsuusuariosEstadoSchema
    .updateOne({_id: id},{$set:{ nom_estado, descripcion_estado }})
    .then((data) => res.json(data))
    .catch((error) => res.json((error)));
});

router.delete('/usu_estado/elimina/:id', (req,res)=>{
    const {id} = req.params;
    UsuusuariosEstadoSchema
    .deleteOne({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json((error)));
});

module.exports = router;