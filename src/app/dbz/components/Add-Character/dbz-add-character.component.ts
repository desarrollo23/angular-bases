import { Component, EventEmitter, Output } from "@angular/core";
import { v4 as uuid , NIL as NIL_UUID } from 'uuid'

import { Character } from "../../interfaces/character.interface";



@Component({
    selector: 'dbz-add-character',
    templateUrl: 'dbz-add-character.component.html'
})
export class DbzAddCharacterComponent {

    @Output()
    public onNewCharacter: EventEmitter<Character> = new EventEmitter();

    public character: Character = {
        id: NIL_UUID,
        name: '',
        power: 0
    }

    emitCharacter(): void {
        this.onNewCharacter.emit(this.character);
        this.character = { id: NIL_UUID, name: '', power: 0 };
    }
}