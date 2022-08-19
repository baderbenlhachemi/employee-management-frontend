import { Component, OnInit } from '@angular/core';
import {CompanyService} from "../services/company.service";
import {Company} from "../models/company.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.css']
})
export class CompaniesListComponent implements OnInit {
  companies?:Company[];

  popoverTitle: string='Delete';
  popoverMessage: string='Are you sure you want to delete the company?';
  cancelClicked: boolean=false;

  //testing
  imageLink: any;
  base64Data: any;
  retrievedImage: any;
  companyId: number;


  constructor(private companyService:CompanyService, private router: Router) { }

  ngOnInit(): void {
    //console.log("lo")
    this.getAll();
  }

  getAll():void{
    this.companyService.getAll().subscribe({
      next: (data) => {
        console.log(data);
        this.companies = data;

        //testing
        this.companyService.getImageData(this.companyId).subscribe({
          next: (data) => {
            this.imageLink = data;
            this.base64Data = this.retrievedImage.picByte;
            this.retrievedImage = 'data:image;base64,' + this.base64Data;
          }
        });

      } // end of next
      });
  } // end of getAll

  update(id:number){
    this.router.navigate(['edit-company',id]);
  }

  delete(id:number){
    // if(confirm("Are you sure you want to delete this company?"))
    this.companyService.delete(id).subscribe({
      next: (data) => {
        this.getAll();
      }
    });
  }

  searchCompanies(key:string):void {
    const results: Company[] = [];
    // @ts-ignore
    for (const company of this.companies) {
      if (company.name.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(company);
      }
    }
    this.companies = results;
    if (results.length === 0 || !key) {
      this.getAll();
    }
  }
}
