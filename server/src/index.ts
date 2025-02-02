import dotenv from "dotenv"
dotenv.config()

import app from "./app";
import { Request, Response } from "express";
import { connectToDb } from "./db/db";

const PORT = process.env.PORT;

app.use('/', (req: Request, res: Response) => {
    res.status(200).send("Hello!")
})

app.use('*', (req, res) => {
    res.status(404).json({
        message: "404 Not Found!"
    })
})

connectToDb(() => {
    app.listen(PORT, () => console.log(`Server started at port ${PORT}.`))
})