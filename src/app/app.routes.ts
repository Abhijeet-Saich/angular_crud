import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserFormComponent } from './user-form/user-form.component';

export const routes: Routes = [
    {
        path : 'users',
        component : UsersComponent
    },
    {
        path : 'users/add',
        component : UserFormComponent
    },
    {
        path : '',
        component : UsersComponent
    },
];
