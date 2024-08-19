const express = require("express");
require('dotenv').config({ path: './llave.env' });

const UsuusuariosTipoSchema  = require("../models/usu_tipo_usuarios")
const router = express.Router();

router.post('/usu_tipo/crear', (req,res)=>{
    const reg = UsuusuariosTipoSchema(req.body);
    reg.save()
    .then((data) => res.json(data))
    .catch((error) => res.json((error)));
});

router.get('/usu_tipo/consulta', (req,res)=>{
    UsuusuariosTipoSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json((error)));
});

router.put('/usu_tipo/actualiza/:id', (req,res)=>{
    const {id} = req.params;
    const {nom_tipo, descripcion_tipo} = req.body;
    UsuusuariosTipoSchema
    .updateOne({_id: id},{$set:{ nom_tipo, descripcion_tipo }})
    .then((data) => res.json(data))
    .catch((error) => res.json((error)));
});

router.delete('/usu_tipo/elimina/:id', (req,res)=>{
    const {id} = req.params;
    UsuusuariosTipoSchema
    .deleteOne({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json((error)));
});

module.exports = router;