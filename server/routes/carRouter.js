var express = require("express");
var router = new express.Router();
const carCtrl = require("../controllers/carCtrl");
/**印章列表 */
router.get("/find/all", carCtrl.findAll);
/**查询一个 */
router.get("/find/one", carCtrl.findOne);
/**添加印章 */
router.post("/add", carCtrl.addOne);
/**删除 */
router.get("/delete", carCtrl.deleteOne);
/**修改 */
router.get("/modify", carCtrl.modify);

module.exports = router;
