import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';

import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { UserListItemComponent } from './user-list-item/user-list-item.component';


@NgModule({
    imports:[
        FormsModule,
        ReactiveFormsModule,
        MaterialModule
    ],
    declarations: [
        RegisterComponent,
        UserComponent,
        HomeComponent,
        UserListItemComponent
    ],
    exports: [
        RegisterComponent,
        UserComponent,
        HomeComponent,
        UserListItemComponent
    ]
})

export class ComponentsModule {

}