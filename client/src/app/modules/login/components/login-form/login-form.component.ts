import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {LoginService} from '../../services';
import {UserService} from '../../../../shared/services';
import validators from '../../../../helpers/validators';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService,
    private userService: UserService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  login() {
    if (this.loginForm.invalid) {
      return;
    } else {
      const loginInfo = this.loginForm.value;
      this.loginService.loginUser(loginInfo)
        .subscribe((response) => {
          this.userService.saveUserInfo(response);
          this.router.navigate(['/welcome']);
        }, ({error}) => alert(error.message));
    }
  }

  buildForm(): void {
    this.loginForm = this.fb.group({
      login: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(2), validators.authSymbols()]],
      password: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(2), validators.authSymbols()]]
    });
  }
}
