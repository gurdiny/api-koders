const express = require("express");
const kodersUseCase = require("../usecases/koders.usecase");
const auth = require("../middlewares/auth.middleware");
const router = express.Router();

// router.use(auth)

// GET /koders

router.get("/", auth, async (request, response) => {
  try {
    const koders = await kodersUseCase.getAll();
    response.json({
      succes: true,
      data: {
        koders,
      },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      succes: false,
      error: error.message,
    });
  }
});

// POST /koder

router.post("/", async (request, response) => {
  try {
    const koderCreated = await kodersUseCase.create(request.body);
    response.json({
      success: true,
      data: {
        koder: koderCreated,
      },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      succes: false,
      error: error.message,
    });
  }
});

// GET /koders/:id

router.get("/:id", auth, async (request, response) => {
  try {
    const id = request.params.id;
    const koders = await kodersUseCase.getById(id);
    response.json({
      succes: true,
      data: { koders },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      succes: false,
      error: error.message,
    });
  }
});

// Delete By Id /koders/:id
router.delete("/:id", auth, async (request, response) => {
  try {
    const { id } = request.params;
    const koderDeleted = await kodersUseCase.deleteById(id);

    response.json({
      succes: true,
      data: { koder: koderDeleted },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      succes: false,
      error: error.message,
    });
  }
});

// PATCH /koders/:id
router.patch("/:id", auth, async (request, response) => {
  try {
    const { id } = request.params;
    const koderUpdated = await kodersUseCase.updateById(id, request.body);
    response.json({
      success: true,
      data: { koder: koderUpdated },
    });
  } catch (error) {
    response.status(error.status || 500);
    response.json({
      succes: false,
      error: error.message,
    });
  }
});
module.exports = router;
