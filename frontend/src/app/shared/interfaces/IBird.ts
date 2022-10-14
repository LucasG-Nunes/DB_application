export interface IBird {
    id:number,
    scientificName: string,
    portugueseName: string,
    size: number,
    habitats: Array<string>,
    threatened: boolean,
    rare: boolean,
    image: string
}