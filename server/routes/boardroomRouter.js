var express = require("express");
var router = new express.Router();
const boardroomCtrl = require("../controllers/boardroomCtrl");
/**印章列表 */
router.get("/find/all", boardroomCtrl.findAll);
/**查询一个 */
router.get("/find/one", boardroomCtrl.findOne);
/**添加印章 */
router.post("/add", boardroomCtrl.addOne);
/**删除 */
router.get("/delete", boardroomCtrl.deleteOne);
/**修改 */
router.get("/modify", boardroomCtrl.modify);

module.exports = router;
