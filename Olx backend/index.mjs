import express from "express"
import { PORT } from "./config/environment.mjs"
import routes from "./routes/index.mjs"
import db from './config/db.mjs'

const app = express()

db.connection.once('open', ()=>console.log('Conneted to DB')).on("error", (err)=>console.log("error connecting DB --------->", err))

app.listen(PORT, function () {
    console.log('http://localhost:' + PORT);
})

app.use('/', (req, res)=>{
    res.send({message: 'For Products type /products and for Users type /users after url'})
})

app.use(express.json())

app.use('/', routes)