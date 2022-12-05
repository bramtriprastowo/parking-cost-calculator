const router = require("express").Router();
const controllers = require("../controllers/api");

//Rute API untuk melakukan get dan post
router
  .get("/", controllers.selectAllData)
  .post("/", controllers.insertData)
//   .get("/:id", controllers.getDetailData)
//   .put("/:id", controllers.updateData)
//   .delete("/:id", controllers.removeData);

module.exports = router;
