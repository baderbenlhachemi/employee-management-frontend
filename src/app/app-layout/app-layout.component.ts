import { Component, OnInit } from '@angular/core';
import {StorageService} from "../views/pages/auth/storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css']
})
export class AppLayoutComponent implements OnInit {

  constructor(private storageService:StorageService , private route:Router) { }

  ngOnInit(): void {
  }
  signout(){
    this.storageService.cleanStorage();
    this.route.navigate(['/login']);
  }
}
