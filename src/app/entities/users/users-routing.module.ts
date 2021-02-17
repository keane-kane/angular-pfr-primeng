import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { ListUserComponent } from './list-user/list-user.component';

const routes: Routes = [

    {  path: '', component: CreateUserComponent },
    {  path: '', component: ListUserComponent },
    {  path: '', component: DetailUserComponent },


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule { }
