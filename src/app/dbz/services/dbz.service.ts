import { Injectable } from "@angular/core";
import { Character } from "../interfaces/character.interface";

import { v4 as uuid } from 'uuid'

@Injectable({
    providedIn: 'root'
})
export class DbzService {

    public characters: Character[] = [
        {
            id: uuid(),
            name: 'Krilin',
            power: 500
        },
        {
            id: uuid(),
            name: 'Goku',
            power: 10000
        }
    ];

    addCharacter( character: Character ): void {
        character.id = uuid();
        this.characters = [...this.characters, character];
    }

    onDeleteCharacter(id: string): void {
        this.characters = this.characters.filter( c => c.id !== id);
    }
}