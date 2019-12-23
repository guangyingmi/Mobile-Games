const Car = require("../model/CarModel");
const responseAction = require("../utils/responseAction");
/**查询所有或者符和条件的所有 */
const findAll = (req, res) => {
  const params = req.query;
  const success = "成功！";
  const error = "失败";
  const has_data = true;
  responseAction(Car.findAll, params, success, error, has_data, res);
};
/**查询指定一个 */
const findOne = (req, res) => {
  const _id = req.query._id;
  const success = "成功！";
  const error = "失败";
  const has_data = true;
  responseAction(Car.findOne, { _id }, success, error, has_data, res);
};
/**添加 */
const addOne = (req, res) => {
  const params = req.body;
  const success = "添加成功！";
  const error = "添加失败";
  const has_data = false;
  responseAction(Car.addOne, params, success, error, has_data, res);
};

/**删除 */

const deleteOne = (req, res) => {
  const _id = req.query._id;
  const success = "删除成功！";
  const error = "删除失败";
  const has_data = false;
  responseAction(Car.deleteOne, { _id }, success, error, has_data, res);
};

/**修改 */

const modify = (req, res) => {
  const params = req.query;
  console.log(params);
  const success = "修改成功！";
  const error = "修改失败";
  const has_data = false;
  responseAction(Car.modify, params, success, error, has_data, res);
};

module.exports = {
  findAll,
  findOne,
  addOne,
  deleteOne,
  modify
};
