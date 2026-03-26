import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-role',
  templateUrl: './choose-role.component.html',
  styleUrls: ['./choose-role.component.css']
})
export class ChooseRoleComponent {

  roles = [
    {
      name: 'Admin',
      icon: 'bi bi-shield-lock-fill',
      image: 'assets/images/admin.png',
      route: '/admin',
      description: 'Accès administrateur'
    },
    {
      name: 'Doctor',
      icon: 'bi bi-heart-pulse-fill',
      image: 'assets/images/doctor.png',
      route: '/doctor',
      description: 'Accès médecin'
    },
    {
      name: 'Nutritionist',
      icon: 'bi bi-apple',
      image: 'assets/images/nutritionist.png',
      route: '/nutritionnist',
      description: 'Accès nutritionniste'
    },
    {
      name: 'Patient',
      icon: 'bi bi-person-fill',
      image: 'assets/images/patient.png',
      route: '/patient',
      description: 'Accès patient'
    }
  ];

  constructor(private router: Router) {}

selectRole(role: string): void {
  // role = 'admin', 'doctor', 'nutritionist', 'patient'
  this.router.navigate(['/auth', role]);
}
}