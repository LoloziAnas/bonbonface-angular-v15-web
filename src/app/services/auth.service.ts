import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token = 'myFakeToken'
  constructor() { }

  getToken():string{
    return this.token;
  }
}
