/**
 * @description 用品model
 */
const mongoose = require("mongoose");
const Article = mongoose.model(
  "article",
  new mongoose.Schema({
    /**编号 */
    id: {
      type: Number,
      required: true
    },
    /**名称 */
    name: {
      type: String,
      required: true
    },
    /**类别 */
    type: {
      type: String,
      required: true
    },
    /**规格 */
    specs: {
      type: String,
      required: true
    },
    /**单位 */
    unit:{
        type:String,
        required:true
    },
    /**数量 */
    price: {
      type: Number,
      required: true
    },
    /**管理员 */
    admin: {
      type: String,
      required: true
    },
    /**地址 */
    address: {
      type: String,
      required: true
    },
    /**描述 */
    description: {
      type: String
    },
    /**附件 */
    addFile: {
      type: String
    }
  })
);
// 查询all
module.exports.findAll = async params => {
  return await Article.find(params);
};
// 查询一个
module.exports.findOne = async _id => {
  return await Article.findOne(_id);
};
// 增加
module.exports.addOne = async data => {
  const article = new Article({
    ...data
  });
  // 保存
  return await article.save();
};

// 删除一个
module.exports.deleteOne = async _id => {
  return await Article.deleteOne(_id);
};

// 修改
module.exports.modify = async params => {
  return await Article.updateOne({_id:params._id},params);
};