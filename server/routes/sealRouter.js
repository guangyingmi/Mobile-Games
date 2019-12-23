const express = require("express");
const router = new express.Router();
const sealCtrl = require("../controllers/sealCtrl");
/**印章列表 */
router.get("/find/all",sealCtrl.findAll)
/**查询一个 */
router.get("/find/one",sealCtrl.findOne)
/**添加印章 */
router.post("/add",sealCtrl.addOne);
/**删除 */
router.get("/delete",sealCtrl.deleteOne);
/**修改 */
router.get("/modify",sealCtrl.modify);

module.exports = router;
