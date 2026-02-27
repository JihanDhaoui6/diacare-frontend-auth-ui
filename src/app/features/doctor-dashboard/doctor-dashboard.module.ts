import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DoctorDashboardComponent } from './doctor-dashboard.component';
import { DoctorDashboardRoutingModule } from './doctor-dashboard-routing.module';

@NgModule({
  declarations: [
    DoctorDashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    DoctorDashboardRoutingModule
  ]
})
export class DoctorDashboardModule { }