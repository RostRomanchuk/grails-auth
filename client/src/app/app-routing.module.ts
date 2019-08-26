import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './guards';

const routes: Routes = [
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: 'login', loadChildren: 'src/app/modules/login/login.module#LoginModule'},
  {path: 'welcome', canLoad: [AuthGuard], loadChildren: 'src/app/modules/welcome/welcome.module#WelcomeModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
