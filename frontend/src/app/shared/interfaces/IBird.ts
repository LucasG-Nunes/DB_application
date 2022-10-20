export interface IBird {
    _id:string,
    scientificName: string,
    portugueseName: string,
    size: number,
    habitats: Array<string>,
    threatened: boolean,
    rare: boolean,
    image: string
}

