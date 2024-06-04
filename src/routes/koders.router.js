const express = require("express")
const kodersUseCase = require("../usecases/koders.usecase")
const router = express.Router()

// GET /koders

router.get("/", async (request, response) => {
    try{

        const koders = await kodersUseCase.getAll()
        response.json({
            succes: true,
            data:{
                koders
            },
        })
    } catch (error){
        response.status(error.status || 500)
        response.json({
            succes: false,
            error: error.message,
        })
    }

})

// POST /koder

router.post("/", async (request, response) =>{
    try{
        const koderCreated = await kodersUseCase.create(request.body)
        response.json({
            success: true,
            data: {
                koder: koderCreated
            }
        })
    }catch  (error){
        response.status(error.status || 500)
        response.json({
            succes: false,
            error: error.message,
        })
    }
})

// GET /koders/:id

router.get("/:id", async (request, response) =>{
    try{
    const id = request.params.id
    const koders = await kodersUseCase.getById(id)
    response.json({
        succes: true,
        data: {koders}
    })
    }catch  (error){
        response.status(error.status || 500)
        response.json({
            succes: false,
            error: error.message,
        })
    }
})

// Delete By Id /koders/:id
router.delete("/:id", async (request, response) =>{
    try{
        const { id } = request.params
        const koderDeleted = await kodersUseCase.deleteById(id)

        response.json({
            succes: true,
            data: { koder: koderDeleted},
        })
    }catch(error){
        response.status(error.status || 500)
        response.json({
            succes: false,
            error: error.message,
        })
    }
})

// PATCH /koders/:id
router.patch("/:id", async (request, response)=>{
    try{
        const {id} = request.params
        const koderUpdated = await kodersUseCase.updateById(id, request.body)
        response.json({
            success: true,
            data: {koder: koderUpdated}
        })
    }catch(error){
        response.status(error.status || 500)
        response.json({
            succes: false,
            error: error.message,
        })
    }

})
module.exports = router