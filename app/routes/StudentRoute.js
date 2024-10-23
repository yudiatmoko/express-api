module.exports = (app) => {
  const controller = require("../controllers/StudentController");
  const router = require("express").Router();

  router.get("/", controller.findAll);
  router.get("/:id", controller.show);
  router.post("/", controller.create);
  router.put("/:id", controller.update);
  router.delete("/:id", controller.delete);
  
  app.use("/student", router);
};
