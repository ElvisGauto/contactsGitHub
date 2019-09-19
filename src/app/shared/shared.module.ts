import { NgModule } from "@angular/core";

import { DataService } from './services/data.service';

import { JustNumbersDirective } from './directives/just-numbers.directive';

@NgModule({
    imports: [

    ],
    declarations: [
        JustNumbersDirective
    ],
    exports: [
        JustNumbersDirective
    ],
    providers: [DataService]
})

export class SharedModule { }