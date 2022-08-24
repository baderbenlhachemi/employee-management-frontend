import { Injectable } from '@angular/core';
const UserToken = 'auth-user';
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
  }

  cleanStorage() {
    localStorage.removeItem(UserToken);
  }

  setUser(user) {
    localStorage.removeItem(UserToken);
    localStorage.setItem(UserToken, JSON.stringify(user));
  }

  getUser() {
    const user = window.localStorage.getItem(UserToken);
    if (user) {
      return JSON.parse(user);
    }
    return {};
  }
  isLoggedIn() {
    const user = window.localStorage.getItem(UserToken);
    if (user) {
      return true;
    }
    return false;
  }

}
