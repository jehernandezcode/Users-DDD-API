import express from "express"
import cors from "express"
import "dotenv/config"
import userRoute from "./infrastructure/route/user.route"
import dbInit from "./infrastructure/db/mongo"
import morgan from "morgan"

const app = express()

//middlewares
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))

//rutas
app.use(userRoute)

//database
dbInit()

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log("server listening on port: ", port)
})
