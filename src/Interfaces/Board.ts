import {List} from "./List.ts";

export interface Board {
    id:number
    name:string
    description: string
    visibility: number
    lists: List[]
}
