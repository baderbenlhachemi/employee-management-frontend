import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CompanyService} from "../services/company.service";
import {Company} from "../models/company.model";

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
  companyId: number;
  company?: Company;

  constructor(private route: ActivatedRoute, private companyService: CompanyService) {
    this.companyId = route.snapshot.params['company_id'];
  }

  ngOnInit(): void {
    console.log(this.companyId);
    this.getCompany();

  }

  getCompany(): void {
    this.companyService.getById(this.companyId).subscribe({
      next: (data) => {
        this.company = data;
      }
    });
  }
}
