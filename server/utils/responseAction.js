/**
 * @description response工具函数
 * @param {Promise} promise_function 需要执行的数据操作函数(model内的函数)
 * @param {Object} params 函数需要的参数(对象)
 * @param {String} success_msg 成功的message
 * @param {String} error_msg 失败的message
 * @param {Boolean} has_data 是否有返回值(是否返回查询到的结果)
 * @param {Response<any>} res response
 * @returns {null}
 *
 */
module.exports = async function(
  promise_function,
  params = {},
  success_msg = "成功！",
  error_msg = "失败",
  has_data = false,
  res
) {
  let code = 0;
  let message = success_msg;
  let data = {};
  try {
    const result = await promise_function(params);
    if (has_data) {
      data = result;
    }
    if(result.length<=0){
      code = 1;
    }
  } catch (err) {
    // console.log("失败：" + err);
    message = error_msg + ":" + err;
    require("./writeLog")("../log/error.log",message,res);
    code = -1;
    data = {};
  } finally {
    res.json({
      code,
      message,
      data
    });
  }
};
