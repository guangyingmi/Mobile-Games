/**
 * @description 会议室model
 */

const mongoose = require("mongoose");
const Boardroom = mongoose.model(
  "boardroom",
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
    /**图片 */
    image:{
        type:String,
        required:true
    },
    /**容量 */
    capacity: {
      type: Number,
      required: true
    },
    /**地址 */
    address: {
      type: String,
      required: true
    },
    /**设备 */
    equipment: {
      type: String,
      required: true
    },
    /**管理员 */
    admin: {
      type: String,
      required: true
    },
    /**状态 */
    status: {
      type: String,
      default: "normal"
    },
    /**描述 */
    description:{
        type:String,
    },
    /**附件 */
    addFile:{
        type:String
    }
  })
);

// 查询all
module.exports.findAll = async params => {
  return await Boardroom.find(params);
};
// 查询一个
module.exports.findOne = async _id => {
  return await Boardroom.findOne(_id);
};
// 增加
module.exports.addOne = async data => {
  const boardroom = new Boardroom({
    ...data
  });
  // 保存
  return await boardroom.save();
};

// 删除一个
module.exports.deleteOne = async _id => {
  return await Boardroom.deleteOne(_id);
};

// 修改
module.exports.modify = async params => {
  return await Boardroom.updateOne({_id:params._id},params);
};