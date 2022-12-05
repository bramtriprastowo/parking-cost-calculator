const router = require("express").Router();
const controllers = require("../controllers/view");

//Rute halaman tampilan
router
  .get("/", controllers.home)
  .get("/add", controllers.add)
//   .get("/:id", controllers.getDetailData)
//   .put("/:id", controllers.updateData)
//   .delete("/:id", controllers.removeData);

module.exports = router;
