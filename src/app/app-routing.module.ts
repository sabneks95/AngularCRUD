import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecordComponent } from './add-record/add-record.component';
import { AuthGuard } from './auth/auth.guard';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditRecordComponent } from './edit-record/edit-record.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'forgot-password', component:ForgotPasswordComponent},
  {path:'register', component:RegisterComponent},
  {path:'dashboard', canActivate:[AuthGuard], component:DashboardComponent},
  {path:'addRecord', component:AddRecordComponent},
  {path:'editRecord/:id', component:EditRecordComponent},  
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'**', component:NotFoundComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
