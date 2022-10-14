import { Request, Response } from "express";

import { BirdModel } from "../models/Bird";

import Logger from "../../config/logger";


export async function createBird(req:Request, res:Response){
  try {
   const data = req.body
   const bird = await BirdModel.create(data)
   return res.status(201).json(data)
  } catch (error:any) {
   Logger.error(`Erro no sistema: ${error}`)
  }
}

export async function findBirdById(req:Request, res:Response){
   try {
      const id = req.params.id
      const bird = await BirdModel.findById(id)
      
      if(!bird){
         return res.status(404).json({error: "O passaro não existe."})
      }
      return res.status(200).json(bird)
   } catch(error:any) {
      Logger.error(`Erro no sistema: ${error.message}`)
      res.status(500).json({error: "Por favor, tente mais tarde!"})

   }
}

export async function getBirds(req:Request, res:Response){
   try {
      const birds = await BirdModel.find()
      res.status(200).json(birds)
   } catch (error:any) {
      Logger.error(`Erro no sistema: ${error.message}`)
      res.status(500).json({error: "Por favor, tente mais tarde!"})

   }
}

export async function removeBird(req:Request, res:Response){
   try {
      const id = req.params.id
      const bird = await BirdModel.findById(id)
      if(!bird){
         return res.status(404).json({error: "O passaro não exsite."})
      }
      await bird.delete()
      return res.status(200).json({message: "Passaro removido com sucesso"})
   } catch (error:any) {
      Logger.error(`Erro no sistema: ${error.message}`)
      res.status(500).json({error: "Por favor, tente mais tarde!"})

   }
}

export async function updateBird(req:Request,res:Response){
   try {
      const id = req.params.id
      const data = req.body
      
      const bird = await BirdModel.findById(id)
      
      if(!bird){
         return res.status(404).json({error: "O passaro não exsite."})
      }

      await BirdModel.updateOne({_id:id},data)
      return res.status(200).json(data)
     
   } catch (error:any) {
      Logger.error(`Erro no sistema: ${error.message}`)
      res.status(500).json({error: "Por favor, tente mais tarde!"})

   }

}