import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NutritionnistDashboardComponent } from './nutritionnist-dashboard.component';
import { NutritionnistDashboardRoutingModule } from './nutritionnist-dashboard-routing.module';

@NgModule({
  declarations: [
    NutritionnistDashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NutritionnistDashboardRoutingModule
  ]
})
export class NutritionnistDashboardModule { }