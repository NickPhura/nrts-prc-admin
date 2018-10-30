// external imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { CookieService } from 'ngx-cookie-service';

// modules
import { SharedModule } from 'app/shared.module';
import { ApplicationsModule } from 'app/applications/applications.module';
import { AppRoutingModule } from 'app/app-routing.module';

// components
import { AppComponent } from 'app/app.component';
import { HomeComponent } from 'app/home/home.component';
import { SearchComponent } from 'app/search/search.component';
import { LoginComponent } from 'app/login/login.component';
import { ConfirmComponent } from 'app/confirm/confirm.component';
import { HeaderComponent } from 'app/header/header.component';
import { FooterComponent } from 'app/footer/footer.component';
import { AdministrationComponent } from 'app/administration/administration.component';
import { UsersComponent } from 'app/administration/users/users.component';
import { AddEditUserComponent } from 'app/administration/users/add-edit-user/add-edit-user.component';
import { SelectOrganizationComponent } from 'app/select-organization/select-organization.component';

// services
import { SearchService } from 'app/services/search.service';
import { FeatureService } from 'app/services/feature.service';
import { AuthenticationService } from 'app/services/authentication.service';
import { ApplicationService } from 'app/services/application.service';
import { OrganizationService } from 'app/services/organization.service';
import { CommentPeriodService } from 'app/services/commentperiod.service';
import { CommentService } from 'app/services/comment.service';
import { DocumentService } from 'app/services/document.service';
import { DecisionService } from 'app/services/decision.service';
import { UserService } from 'app/services/user.service';
import { CanDeactivateGuard } from 'app/services/can-deactivate-guard.service';
import { ConfigService } from 'app/services/config.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    LoginComponent,
    ConfirmComponent,
    HeaderComponent,
    FooterComponent,
    AdministrationComponent,
    UsersComponent,
    AddEditUserComponent,
    SelectOrganizationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    SharedModule,
    ApplicationsModule,
    AppRoutingModule, // <-- module import order matters - https://angular.io/guide/router#module-import-order-matters
    NgbModule.forRoot(),
    NgxPaginationModule,
    Ng2PageScrollModule.forRoot(),
    BootstrapModalModule
  ],
  providers: [
    CookieService,
    SearchService,
    FeatureService,
    AuthenticationService,
    ApplicationService,
    OrganizationService,
    CommentPeriodService,
    CommentService,
    DocumentService,
    DecisionService,
    UserService,
    CanDeactivateGuard,
    ConfigService
  ],
  entryComponents: [
    ConfirmComponent,
    AddEditUserComponent,
    SelectOrganizationComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
