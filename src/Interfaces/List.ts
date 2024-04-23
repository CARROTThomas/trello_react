import {Card} from "./Card.ts";

export interface List {
    id: number;
    name: string;
    cards: Card[]; // Définir comme un tableau de Card
}
