import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CompaniesListComponent} from './views/pages/company/companies-list/companies-list.component';
import {AddCompanyComponent} from './views/pages/company/add-company/add-company.component';
import {CompanyDetailsComponent} from './views/pages/company/company-details/company-details.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {EditCompanyComponent} from './views/pages/company/edit-company/edit-company.component';
import {NotfoundComponent} from './views/pages/notfound/notfound.component';
import {ConfirmationPopoverModule} from "angular-confirmation-popover";
import { EmptyLayoutComponent } from "./empty-layout/empty-layout.component";
import { AppLayoutComponent } from './app-layout/app-layout.component';
import {httpInterceptorProviders} from "./helpers/http.interceptor";
import {LoginComponent} from "./views/pages/auth/login/login.component";

// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    CompaniesListComponent,
    AddCompanyComponent,
    CompanyDetailsComponent,
    EditCompanyComponent,
    NotfoundComponent,
  LoginComponent,
    EmptyLayoutComponent,
    AppLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger'
    })

  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
