var express = require("express");
var router = new express.Router();
const assetCtrl = require("../controllers/assetCtrl");
/**印章列表 */
router.get("/find/all", assetCtrl.findAll);
/**查询一个 */
router.get("/find/one", assetCtrl.findOne);
/**添加印章 */
router.post("/add", assetCtrl.addOne);
/**删除 */
router.get("/delete", assetCtrl.deleteOne);
/**修改 */
router.get("/modify", assetCtrl.modify);

module.exports = router;
