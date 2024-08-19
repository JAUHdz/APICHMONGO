const express = require("express");


const UsuusuariosChSchema  = require("../models/usu_usuarios_ch")
const router = express.Router();

router.post('/usu_usuarios/crear', (req,res)=>{
    const reg = UsuusuariosChSchema(req.body);
    reg.save()
    .then((data) => res.json(data))
    .catch((error) => res.json((error)));
});

router.get('/usu_usuarios/consulta', (req,res)=>{
    UsuusuariosChSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json((error)));
});
router.get('/usu_usuarios/consulta/:id', (req,res)=>{
    const {id} = req.params;
    UsuusuariosChSchema
    .findOne({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json((error)));
});
router.get('/usu_usuarios/consulta/nombre/:nombre', (req, res) => {
    const { nombre } = req.params;
  
    UsuusuariosChSchema.findOne({ nom_usuario: nombre })
      .then((data) => {
        if (!data) {
          return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json(data);
      })
      .catch((error) => res.status(500).json({ message: 'Error al buscar usuario', error }));
  });
router.put('/usu_usuarios/actualiza/:id', (req,res)=>{
    const {id} = req.params;
    const {nombre,apellido_paterno,apellido_materno, nom_usuario, contrasena,id_usu_tipo,id_usu_estado} = req.body;
    UsuusuariosChSchema
    .updateOne({_id: id},{$set:{ nombre,apellido_paterno,apellido_materno, nom_usuario, contrasena,id_usu_tipo,id_usu_estado }})
    .then((data) => res.json(data))
    .catch((error) => res.json((error)));
});

router.delete('/usu_usuarios/elimina/:id', (req,res)=>{
    const {id} = req.params;
    UsuusuariosChSchema
    .deleteOne({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json((error)));
});

module.exports = router;