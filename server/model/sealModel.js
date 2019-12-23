/**
 * @description 印章model
 */

const mongoose = require("mongoose");
const Seal = mongoose.model(
  "seal",
  new mongoose.Schema({
    /**名字 */
    name: {
      type: String,
      required: true
    },
    /**启用日期 */
    open_data: {
      type: Date,
      required: true
    },
    /**借用人 */
    user: {
      type: String
      //   required: true
    },
    /**管理员 */
    admin: {
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
  return await Seal.find(params);
};
// 查询一个
module.exports.findOne = async _id => {
  return await Seal.findOne(_id);
};
// 增加
module.exports.addOne = async data => {
  const seal = new Seal({
    // name: data.name,
    // open_data: data.open_data,
    // user: data.user,
    // admin: data.admin,
    // description: data.description,
    // addFile: data.addFile
    ...data
  });
  // 保存
  return await seal.save();
};

// 删除一个
module.exports.deleteOne = async _id => {
  return await Seal.deleteOne(_id);
};

// 修改
module.exports.modify = async params => {
  return await Seal.updateOne({_id:params._id},params);
};