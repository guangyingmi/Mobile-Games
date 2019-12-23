const express = require("express");
const { PORT, DBPATH } = require("./config");
const session = require("express-session");
const mongoose = require("mongoose");
const MongoDBStore = require("connect-mongodb-session")(session);
const server = express();

server.use(express.urlencoded({ urlencoded: false }));
server.use(express.json());


// server.use("/api/admin",require("./routes/adminRouter"));
server.use("/api/boardroom",require("./routes/boardroomRouter"));
server.use("/api/car",require("./routes/carRouter"));
server.use("/api/asset",require("./routes/assetRouter"));
server.use("/api/article",require("./routes/articleRouter"));
server.use("/api/licence",require("./routes/licenceRouter"));
server.use("/api/seal",require("./routes/sealRouter"));


/**
 * 
 * @description 连接数据库后启动服务器
 * 
 */
mongoose.connect(
  DBPATH,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  (error) => {
    if (error) {
      console.error("连接数据库失败：" + error);
    } else {
      console.log("连接数据成功！");
      // 启动成功
      server.listen(PORT, error => {
        if (error) {
          console.error("服务器启动失败："+error);
        } else {
          console.log("服务器已启动，端口号为" + PORT);
        }
      });
    }
  }
);

