import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallPageComponent } from './pages/call-page/call-page.component';
import { AuthGuard } from './AuthGuard ';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ResumePageComponent } from './pages/resume-page/resume-page.component';
import { StudentProfilePageComponent } from './pages/student-profile-page/student-profile-page.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },{
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
    canActivate: [AuthGuard] 
  },  {
    path: 'call-page',
    component: CallPageComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard] 
  },
  {
    path: 'home-page',
    component: HomePageComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard] 
  },
  {
    path: 'resume-page',
    component: ResumePageComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard] 
  },
  {
    path: 'student-profile-page',
    component: StudentProfilePageComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
