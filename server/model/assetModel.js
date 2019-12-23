/**
 * @description 资产model
 */


const mongoose = require("mongoose");
const Asset = mongoose.model(
  "asset",
  new mongoose.Schema({
    /**编号 */
    id: {
      type: Number,
      required: true
    },
    /**名字 */
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
    /**价格 */
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
    /**状态 */
    status: {
      type: String,
      default: "normal"
    },
    /**描述 */
    description: {
      type: String
    },
    /**附件 */
    addFile: {
      type: String
    },
    /**采购日期 */
    procurement: {
      type: Date,
      required: true
    },
    /**保修时间 */
    insurance: {
      type: Date,
      required: true
    }
  })
);
// 查询all
module.exports.findAll = async params => {
  return await Asset.find(params);
};
// 查询一个
module.exports.findOne = async _id => {
  return await Asset.findOne(_id);
};
// 增加
module.exports.addOne = async data => {
  const asset = new Asset({
    ...data
  });
  // 保存
  return await asset.save();
};

// 删除一个
module.exports.deleteOne = async _id => {
  return await Asset.deleteOne(_id);
};

// 修改
module.exports.modify = async params => {
  return await Asset.updateOne({_id:params._id},params);
};