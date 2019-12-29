const User = require("../model/userModel");
const responseAction = require("../utils/responseAction");

module.exports.checkLogin = async (req,res)=>{
    const { username, password } = req.body;
    const success = "登录成功！";
    const fail = "账号或者密码错误！";
    const result = await User.checkLogin({username,password});
    if(result.length<=0){
       res.json({
         code:-2,
         message:fail,
         data:{}
       });
    }else{
        res.json({
          code: 0,
          message: success,
          data: {}
        });
    }
}