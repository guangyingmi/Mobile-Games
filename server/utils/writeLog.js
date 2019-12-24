const fs = require("fs");
const path = require("path");
/**
 * @description 用于写日志的工具函数
 * @param {String} file 日志文件的相对路径
 * @param {String} message 需要写入日志的内容
 * @param {Response} res response
 */
module.exports = function(file,message,res){
     fs.appendFile(
       path.join(__dirname, file),
       "写入时间:[" +
         new Date().toLocaleString() +
         "] 访问路径:" +
         res.req.originalUrl +
         " 写入信息:" +
         message +
         " 客服端:" +
         res.req.headers["user-agent"] +
         "\n",
       error => {
         if (error) {
           console.log("写入日志失败！");
         } else {
           console.log(
             `信息已经写入日志,具体请查看: ${file.replace("../", "")}`
           );
         }
       }
     );
}