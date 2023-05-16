import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ValidateService } from './services/validate.service';
import { AuthenService } from 'src/app/services/auth.service';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import {  HTTP_INTERCEPTORS,HttpClientModule } from '@angular/common/http';
import { TokenInterceptorService } from './services/token-interceptor.service';
import {AuthModule} from '@auth0/auth0-angular'
import {jwtHelper} from 'angular-jwt'
import {AuthGuard} from './guards/auth.guard';
import { LeaveformComponent } from './components/leaveform/leaveform.component';
import { AdminDComponent } from './components/admin-d/admin-d.component';
import { ManagerDComponent } from './components/manager-d/manager-d.component';
import { MatchComponent } from './components/match/match.component';
import { AssignComponent } from './components/assign/assign.component';
import { RequestsComponent } from './components/requests/requests.component';
import { AnnounceComponent } from './components/announce/announce.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { ThreadComponent } from './components/thread/thread.component';
import { TasksComponent } from './components/tasks/tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    ProfileComponent,
    LeaveformComponent,
    AdminDComponent,
    ManagerDComponent,
    MatchComponent,
    AssignComponent,
    RequestsComponent,
    AnnounceComponent,
    ThreadComponent,
    TasksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TypeaheadModule.forRoot(),
    AuthModule.forRoot({
      domain: '{yourDomain}',
      clientId: '{yourClientId}',
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    }),
    BrowserAnimationsModule,
  ],
  providers: [ValidateService, AuthenService, AuthGuard,
    {
    provide : HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi   : true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
