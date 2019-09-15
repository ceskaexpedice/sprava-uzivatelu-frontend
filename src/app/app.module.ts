import { DatetimePipe } from './components/pipes/datetime.pipe';
import { DatePipe } from './components/pipes/date.pipe';
import { UsersComponent } from './components/users/users.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AngularTokenModule } from 'angular-token';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/account/login/login.component';
import { OmniauthComponent } from './components/account/omniauth/omniauth.component';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './services/api.service';
import { UserRoleDialogComponent } from './dialogs/user-role-dialog/user-role-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    UsersComponent,
    LoginComponent,
    OmniauthComponent,
    DatePipe,
    DatetimePipe,
    UserRoleDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularTokenModule.forRoot({
      apiBase: environment.cloudApiBase,
      apiPath: environment.cloudApiPath,
      // oAuthBase: '${environment.cloudApiBase}/${environment.cloudApiPath}',
      // apiBase: environment.cloudApiBase1,
      oAuthBase: `${environment.cloudApiBase}/${environment.cloudApiPath}`,

      oAuthCallbackPath: 'omniauth',
      oAuthPaths: {
        google: 'auth/google_oauth2',
        facebook: 'auth/facebook'
      },
      oAuthWindowType: 'newWindow'
    })
  ],
  providers: [
    AngularTokenModule,
    AuthService,
    ApiService
  ],
  entryComponents: [
    UserRoleDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
