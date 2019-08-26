import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomePageComponent} from './components';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: WelcomePageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class WelcomeRoutingModule { }
