import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NlogComponent } from './pages/nlog/nlog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [WelcomeComponent, NlogComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
		FormsModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
