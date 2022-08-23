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
import { AuthComponent } from './views/pages/auth/auth.component';
import {LoginComponent} from "./views/pages/auth/login/login.component";
import {AuthModule} from "./views/pages/auth/auth.module";
import { EmptyLayoutComponent } from "./empty-layout/empty-layout.component";
import { AppLayoutComponent } from './app-layout/app-layout.component';

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
    AuthComponent,
    EmptyLayoutComponent,
    AppLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AuthModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger'
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
