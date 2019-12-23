var express = require("express");
var router = new express.Router();
const licenceCtrl = require("../controllers/licenceCtrl");
/**印章列表 */
router.get("/find/all", licenceCtrl.findAll);
/**查询一个 */
router.get("/find/one", licenceCtrl.findOne);
/**添加印章 */
router.post("/add", licenceCtrl.addOne);
/**删除 */
router.get("/delete", licenceCtrl.deleteOne);
/**修改 */
router.get("/modify", licenceCtrl.modify);

module.exports = router;
