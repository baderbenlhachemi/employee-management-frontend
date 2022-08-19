import { Component, OnInit } from '@angular/core';
import {Company} from "../models/company.model";
import {CompanyService} from "../services/company.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css']
})
export class EditCompanyComponent implements OnInit {

  id!: number;
  company: Company = new Company(0, "", "", "", "", "", "");

  errorName:any;
  errorAddress:any;
  errorEmail:any;
  errorPhone:any;
  errorWebsite:any;

  constructor(private companyService: CompanyService,
              private route: ActivatedRoute,
              private router: Router) {
  }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['company_id'];
    this.companyService.getById(this.id).subscribe({
      next: (data) => {
        this.company = data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  update() {
    this.id = this.route.snapshot.params['company_id'];
    this.company.id= this.id;
    this.companyService.update(this.id, this.company).subscribe({
      error: (err2) => {
        this.errorName=err2.error.name;
        this.errorAddress=err2.error.address;
        this.errorEmail=err2.error.email;
        this.errorPhone=err2.error.phone;
        this.errorWebsite=err2.error.website
      },

      next: (data) => {
        this.company = data;
        this.router.navigate(['companies']);
      }
    });


  }

}



