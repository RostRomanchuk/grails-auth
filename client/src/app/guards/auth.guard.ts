import { Injectable } from '@angular/core';
import { Router, CanActivate, CanLoad } from '@angular/router';
import { UserService } from '../shared/services';
@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  constructor(public auth: UserService, public router: Router) {}

  private checkAuthentication(): boolean {
    if (!this.auth.isLoggedIn) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

  canActivate(): boolean {
    return this.checkAuthentication();
  }

  canLoad(): boolean {
    return this.checkAuthentication()
  }
}
