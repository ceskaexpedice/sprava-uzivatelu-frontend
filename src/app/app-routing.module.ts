import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './components/account/login/login.component';
import { OmniauthComponent } from './components/account/omniauth/omniauth.component';
import { UsersComponent } from './components/users/users.component';


const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [ AuthGuard ]},
  { path: 'users', component: UsersComponent, canActivate: [ AuthGuard ]},
  { path: 'login', component: LoginComponent },
  { path: 'omniauth', component: OmniauthComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
