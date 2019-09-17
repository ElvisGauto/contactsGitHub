import { NgModule } from "@angular/core";

import { JustNumbersDirective } from './directives/just-numbers.directive';

@NgModule({
    imports: [

    ],
    declarations: [
        JustNumbersDirective
    ],
    exports: [
        JustNumbersDirective
    ]
})

export class SharedModule { }