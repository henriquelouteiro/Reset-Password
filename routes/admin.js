const express = require("express")
const router = express.Router()

router.get("/", (req,res)=> {
    res.render("admin/index")
})

router.get("/listamedico", (req,res)=>{
    res.send("INFORMAÇÕES DO USUARIO")
})

router.get("/resetar", (req,res)=>{
    res.render("admin/reset")
})

router.get("/informacoes", (req,res)=>{

    res.render("admin/paciente",{id : req.query.id, cpf : req.query.cpf })
})



module.exports = router