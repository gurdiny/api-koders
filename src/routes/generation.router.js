const express = require("express");
const generationUseCase = require("../usecases/generation.usecase");
const router = express.Router();

// Get Generation
router.get("/", async (request, response) => {
  try {
    const generation = await generationUseCase.getAll();
    response.json({
      succes: true,
      data: {
        generation,
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

router.post("/", async (request, response) => {
  try {
    const generationCreated = await generationUseCase.create(request.body);
    response.json({
      success: true,
      data: {
        generation: generationCreated,
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

router.get("/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const generation = await generationUseCase.getById(id);
    response.json({
      succes: true,
      data: { generation },
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
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const generationDeleted = await generationUseCase.deleteById(id);

    response.json({
      succes: true,
      data: { koder: generationDeleted },
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
router.patch("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const generationUpdated = await generationUseCase.updateById(
      id,
      request.body
    );
    response.json({
      success: true,
      data: { koder: generationUpdated },
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
