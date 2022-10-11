import { body } from "express-validator";


export const birdCreateValidation = () => {
    return [
        body("scientificName").isString().withMessage("O nome cientifico é obrigatório").isLength({ min: 3 }).withMessage("O nome cientifico precisa ter no mínimo 3 caracteres").isLength({max: 20}).withMessage("O nome cientifico precisa ter no máximo 20 caracteres"),
        body("portugueseName").isString().withMessage("O nome cientifico é obrigatório").isLength({ min: 3 }).withMessage("O nome em português precisa ter no mínimo 3 caracteres").isLength({max: 20}).withMessage("O nome em português precisa ter no máximo 20 caracteres"),
        body("size").custom((value:number)=>{
            if(value <= 0){
                throw new Error ("O tamanho do seu passaro precisa ser maior que 0")
            }
            return true;
        }),
        body("image").isURL().withMessage("A imaagem precisa ser uma URL.")

    ]
}