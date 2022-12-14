import {model,Schema} from "mongoose"

interface Bird {
    scientificName: string,
    portugueseName: string,
    size: number,
    habitats: string,
    threatened: boolean,
    rare: boolean,
    image: String,
    avistamento:String
}


const birdSchema = new  Schema<Bird>({
    scientificName: {type: String, minlength:3, maxlength:20},
    portugueseName: {type: String, minlength:3, maxlength:20},
    size: {type: Number},
    habitats: {type: String, minlength:3, maxlength:20},
    threatened: {type: Boolean},
    rare: {type: Boolean},
    image:{type:String},
    avistamento:{type:String}
},{
    timestamps:true
}
)

export const BirdModel = model<Bird>("Bird",birdSchema, "Birds");