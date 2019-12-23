/**
 * @description 车辆model
 */

const mongoose = require("mongoose");
const Car = mongoose.model(
  "car",
  new mongoose.Schema({
    /**名字 */
    name: {
      type: String,
      required: true
    },
    /**图片 */
    image: {
      type: String,
      required: true
    },
    /**车牌 */
    license: {
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
    /**油耗 */
    BSFC: {
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
    /**颜色 */
    color: {
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
    /**年检时间 */
    MOT: {
      type: Date,
      required: true
    },
    /**保养时间 */
    maintain: {
      type: Date,
      required: true
    },
    /**保险到期时间 */
    insurance:{
        type:Date,
        required:true
    }
  })
);
// 查询all
module.exports.findAll = async params => {
  return await Car.find(params);
};
// 查询一个
module.exports.findOne = async _id => {
  return await Car.findOne(_id);
};
// 增加
module.exports.addOne = async data => {
  const car = new Car({
    ...data
  });
  // 保存
  return await car.save();
};

// 删除一个
module.exports.deleteOne = async _id => {
  return await Car.deleteOne(_id);
};

// 修改
module.exports.modify = async params => {
  return await Car.updateOne({_id:params._id},params);
};