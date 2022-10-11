import { Router, Request, Response } from "express"
import { createBird, findBirdById, getBirds, removeBird, updateBird } from "./controllers/birdController"
import { birdCreateValidation } from "./middleware/birdValidation";
import { validate } from "./middleware/handleValidation";
const router = Router()

export default router.get("/teste", (req: Request, res: Response) => {
    res.status(200).send("Api Working!")
})
.post("/bird",birdCreateValidation(),validate, createBird)
.get("/bird/:id",findBirdById)
.get("/bird",getBirds)
.delete("/bird/:id",removeBird)
.patch("/bird/:id",updateBird)