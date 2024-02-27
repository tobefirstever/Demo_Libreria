import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MasterLayoutComponent } from './layouts/master-layout/master-layout.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';


const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/dashboard', 
    pathMatch: 'full'
  },
  { 
    path: 'auth', 
    component: AuthLayoutComponent, 
    loadChildren: './modules/auth/auth.module#AuthModule',
    data: { title: 'Login', showHeaderContent: true }
  },
  {
    path: 'dashboard',
    component: MasterLayoutComponent,
    loadChildren: './modules/dashboard/dashboard.module#DashboardModule',
    data: { title: 'Dashboard', showHeaderContent: true }
  },
  { 
    path: '**', 
    component: PageNotFoundComponent,
    data: { title: 'Page Not Found', showHeaderContent: true }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
