import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from "./pages/main-page.component";
import { DbzListComponent } from "./components/List/dbz-list.component";
import { DbzAddCharacterComponent } from "./components/Add-Character/dbz-add-character.component";

@NgModule({
    declarations: [
        MainPageComponent,
        DbzListComponent,
        DbzAddCharacterComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        MainPageComponent
    ]
})
export class DbzModule {

}