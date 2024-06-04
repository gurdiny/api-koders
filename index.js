require("dotenv").config()
const server = require("./src/server.js")
const db = require("./src/lib/db.js")
const PORT = process.env.PORT || 8080
db.connect()
.then(()=>{
    console.log("DB conected")
    server.listen(PORT, () =>{
        console.log("Server is running in", PORT)
    })
})
.catch(error =>{
    console.error("DB connection error", error)
})
