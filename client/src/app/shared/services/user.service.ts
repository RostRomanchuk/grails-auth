import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user = JSON.parse(localStorage.getItem('user')) || null;

  constructor(private router: Router) { }

  get isLoggedIn(): boolean {
    return !!this.user || !!JSON.parse(localStorage.getItem('user'));
  }

  saveUserInfo(info) {
    this.user = info;
    localStorage.setItem('user', JSON.stringify(info));
  }

  logout() {
    this.user = null;
    localStorage.removeItem('user');
    this.router.navigate(['/login'])
  }
}
