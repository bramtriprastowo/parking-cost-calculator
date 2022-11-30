const router = require("express").Router();
const controllers = require("../controllers/index");

router
  .get("/", controllers.selectAllData)
  .post("/", controllers.insertData)
//   .get("/:id", controllers.getDetailData)
//   .put("/:id", controllers.updateData)
//   .delete("/:id", controllers.removeData);

module.exports = router;
