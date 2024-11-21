import { Component, EventEmitter, Input, Output, output } from "@angular/core";
import { Character } from "../../interfaces/character.interface";

@Component({
    selector: 'dbz-list',
    templateUrl: 'dbz-list.component.html'
})
export class DbzListComponent {

    @Input()
    public characterList: Character[] = [];

    @Output()
    public onDeleteCharacter: EventEmitter<string> = new EventEmitter();

    onEmitDeleteCharacter(id: string): void {
        this.onDeleteCharacter.emit(id);
    }
}