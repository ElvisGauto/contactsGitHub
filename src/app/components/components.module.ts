import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';

import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import { SharedModule } from '../shared/shared.module';
import { ContactDialogComponent } from './contact/contact-dialog/contact-dialog.component';

let COMPONENTS = [
    ContactComponent,
    UserComponent,
    HomeComponent,
    UserListItemComponent,
    ContactDialogComponent
]

@NgModule({
    imports:[
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        SharedModule
    ],
    declarations: [
        ...COMPONENTS
    ],
    exports: [
        ...COMPONENTS
    ]
})

export class ComponentsModule {

}