import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CompaniesListComponent} from "./views/pages/company/companies-list/companies-list.component";
import {CompanyDetailsComponent} from "./views/pages/company/company-details/company-details.component";
import {AddCompanyComponent} from "./views/pages/company/add-company/add-company.component";
import {EditCompanyComponent} from "./views/pages/company/edit-company/edit-company.component";
import {NotfoundComponent} from "./views/pages/notfound/notfound.component";

const routes: Routes = [
  {path: '', redirectTo: '/companies', pathMatch: 'full'},
  {path: 'companies', component: CompaniesListComponent},
  {path: 'company/:company_id', component: CompanyDetailsComponent},
  {path: 'add-company', component: AddCompanyComponent},
  {path: 'edit-company/:company_id', component: EditCompanyComponent},
  {path: 'delete-company/:company_id', component: CompanyDetailsComponent},
  {path: '**', component: NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
