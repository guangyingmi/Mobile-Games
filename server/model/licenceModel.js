/**
 * @description 证件model
 */
const mongoose = require("mongoose");
const Licence = mongoose.model(
  "licence",
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
    /**签发机构 */
    issuing_body: {
      type: String,
      required: true
    },
    /**年审 */
    review: {
      type: Boolean,
      default: true
    },
    /**年审日期 */
    next_review: {
      type: Date,
      required: true
    },
    /**是否永久 */
    infinite: {
      type: Boolean,
      required: true
    },
    /**借用人 */
    user: {
      type: String,
    //   required: true
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
  return await Licence.find(params);
};
// 查询一个
module.exports.findOne = async _id => {
  return await Licence.findOne(_id);
};
// 增加
module.exports.addOne = async data => {
  const licence = new Licence({
    ...data
  });
  // 保存
  return await licence.save();
};

// 删除一个
module.exports.deleteOne = async _id => {
  return await Licence.deleteOne(_id);
};

// 修改
module.exports.modify = async params => {
  return await Licence.updateOne({_id:params._id},params);
};