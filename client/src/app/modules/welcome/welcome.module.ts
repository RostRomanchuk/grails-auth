import { NgModule } from '@angular/core';
import { WelcomePageComponent } from './components';
import { SharedModule } from '../../shared';
import {WelcomeRoutingModule} from './welcome-routing.module';

const welcomePageComponents = [
  WelcomePageComponent
];

@NgModule({
  declarations: [...welcomePageComponents],
  imports: [
    WelcomeRoutingModule,
    SharedModule
  ],
  exports: [
    WelcomeRoutingModule
  ]
})
export class WelcomeModule { }
