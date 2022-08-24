import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {StorageService} from "../storage.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
form : any = {
  username : null,
  password : null
};
isLoggedIn = false ;
isLoginFailed = false;
errorMessage = '';
roles :string[]=  [];
  constructor(private authService : AuthService , private storageService : StorageService, private router: Router
  ) {}

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }
  onSubmit () {
    const {username , password} = this.form;
    this.authService.login(username , password).subscribe({
      next: data => {
        this.storageService.setUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
        //this.reloadPage()

        // Redirect to Companies
        this.router.navigate(['/companies']);
      },

      error: err => {
      //  this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }
reloadPage() {
  window.location.reload();
}
}
