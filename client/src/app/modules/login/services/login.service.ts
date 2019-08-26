import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor (private http: HttpClient){}

  loginUser = (loginInfo) => this.http.post(
    `${environment.serverUrl}/login`,
    loginInfo,
    {responseType: 'json'}
    )
}
