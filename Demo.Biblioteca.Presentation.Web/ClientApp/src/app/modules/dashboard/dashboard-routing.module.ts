import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { VerificaTokenGuard } from 'src/app/core/guards/verifica-token.guard';
import { NlogComponent } from './pages/nlog/nlog.component';


const routes: Routes = [
  { 
    path: '', 
    canActivate: [VerificaTokenGuard],
    component: WelcomeComponent
  },
  { 
    path: 'nlog', 
    canActivate: [VerificaTokenGuard],
    component: NlogComponent,
    data: { title: 'NLog', showHeaderContent: true }
  },  
  { path: '**', redirectTo: '', pathMatch: 'full' }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
