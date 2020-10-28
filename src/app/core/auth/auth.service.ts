import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authenticated = false;

  constructor() { }

  logOn(): void {
    this.authenticated = true;
  }
}
