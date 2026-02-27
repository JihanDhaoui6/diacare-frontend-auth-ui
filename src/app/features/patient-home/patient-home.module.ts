import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PatientHomeComponent } from './patient-home.component';
import { PatientHomeRoutingModule } from './patient-home-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [PatientHomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    PatientHomeRoutingModule,
    SharedModule
  ]
})
export class PatientHomeModule { }