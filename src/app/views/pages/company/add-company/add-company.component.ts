import {Component, OnInit} from '@angular/core';
import {CompanyService} from "../services/company.service";
import {Company} from "../models/company.model";
import {Router} from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})

export class AddCompanyComponent implements OnInit {
  companyObject: Company = {
    id: 0,
    name: "",
    address: "",
    email: "",
    phone: "",
    website: "",
    description: "",
  }

  errorName: any;
  errorAddress: any;
  errorEmail: any;
  errorPhone: any;
  errorWebsite: any;
  errorAlreadyExists: string = '';
  selectedFile: File;
  imgURL: any;
  message: string;

  constructor(private companyService: CompanyService, private route: Router) {
  }

  ngOnInit(): void {
  }

  //Gets called when the user selects an image
  onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
  }

  addCompany(): void {
    this.companyService.add(this.companyObject).subscribe({

      error: (err) => {
        this.errorName = err.error.name;
        this.errorAddress = err.error.address;
        this.errorEmail = err.error.email;
        this.errorPhone = err.error.phone;
        this.errorWebsite = err.error.website;
        if (err.error.message != null) {
          this.errorAlreadyExists = err.error.message;
        }

        // swal error alert
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })

      }, // end of error

      next: (data) => {
        this.companyObject = data;
        console.log(data);
        this.route.navigateByUrl("/company/" + this.companyObject.id); // redirect to company details page

        // swal success alert
        Swal.fire({
          title: 'Success',
          text: 'Company added successfully',
          icon: 'success',
          confirmButtonText: 'OK'
        })

        console.log(data.id);
        //Make a call to the Spring Boot Application to save the image
        this.companyService.uploadImageData(data.id, <File>this.selectedFile).subscribe({
          next: (data) => {
            console.log(data);
          }
        })
      } // end of next
    }); //end of subscribe
  } // end of addCompany
}

