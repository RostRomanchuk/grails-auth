import { NgModule } from '@angular/core';
import {SharedModule} from '../../shared';
import { LoginFormComponent } from './components';
import {LoginRoutingModule} from './login-routing.module';

const loginComponents = [
  LoginFormComponent
];

@NgModule({
  declarations: [...loginComponents],
  imports: [
    LoginRoutingModule,
    SharedModule
  ],
  exports: [LoginRoutingModule]
})
export class LoginModule { }
