const express = require("express");
const router = new express.Router();
const userCtrl = require("../controllers/userCtrl");

router.post("/checkLogin",userCtrl.checkLogin);

module.exports=router;