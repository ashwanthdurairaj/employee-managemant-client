import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './guards/auth.guard';
import { LeaveformComponent } from './components/leaveform/leaveform.component';
import { ManagerDComponent } from './components/manager-d/manager-d.component';
import { AdminDComponent } from './components/admin-d/admin-d.component';
import { MatchComponent } from './components/match/match.component';
import { AssignComponent } from './components/assign/assign.component';
import { RequestsComponent } from './components/requests/requests.component';
import { AnnounceComponent } from './components/announce/announce.component';
import { ThreadComponent } from './components/thread/thread.component';
import { TasksComponent } from './components/tasks/tasks.component';

const routes: Routes = [
  {path:'register', component:RegisterComponent,canActivate: [AuthGuard]},
  {path:'', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent, canActivate: [AuthGuard]},
  {path:'profile', component:ProfileComponent, canActivate: [AuthGuard]},
  {path:'leave', component:LeaveformComponent, canActivate: [AuthGuard]},
  {path:'manager', component:ManagerDComponent, canActivate: [AuthGuard]},
  {path:'admin', component:AdminDComponent, canActivate: [AuthGuard]},
  {path:'match', component:MatchComponent, canActivate: [AuthGuard]},
  {path:'assign', component:AssignComponent, canActivate: [AuthGuard]},
  {path:'requests', component:RequestsComponent, canActivate: [AuthGuard]},
  {path:'announcement', component:AnnounceComponent, canActivate: [AuthGuard]},
  {path: 'thread', component:ThreadComponent, canActivate: [AuthGuard]},
  {path: 'tasks', component:TasksComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
