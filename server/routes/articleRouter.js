var express = require("express");
var router = new express.Router();
const articleCtrl = require("../controllers/articleCtrl");
/**印章列表 */
router.get("/find/all", articleCtrl.findAll);
/**查询一个 */
router.get("/find/one", articleCtrl.findOne);
/**添加印章 */
router.post("/add", articleCtrl.addOne);
/**删除 */
router.get("/delete", articleCtrl.deleteOne);
/**修改 */
router.get("/modify", articleCtrl.modify);

module.exports = router;
