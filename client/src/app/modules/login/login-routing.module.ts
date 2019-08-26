import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginFormComponent} from './components';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: LoginFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class LoginRoutingModule { }
