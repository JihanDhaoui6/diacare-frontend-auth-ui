import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-test-users',
  templateUrl: './test-users.component.html',
  styleUrls: ['./test-users.component.css']
})
export class TestUsersComponent implements OnInit {
  users: any[] = [];
  loading: boolean = false;
  error: string = '';
  
  // Objet pour le formulaire
  newUser = {
    name: '',
    email: ''
  };

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  // Charger tous les utilisateurs
  loadUsers() {
    this.loading = true;
    console.log('Chargement des utilisateurs...');
    
    this.apiService.getUsers().subscribe({
      next: (data) => {
        console.log('Données reçues:', data);  
        this.users = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Erreur:', err);  
        this.error = 'Erreur de chargement: ' + err.message;
        this.loading = false;
      }
    });
  }

  // Ajouter un nouvel utilisateur
  addUser() {
    if (!this.newUser.name || !this.newUser.email) {
      alert('Veuillez remplir tous les champs');
      return;
    }

    this.loading = true;
    this.apiService.addUser(this.newUser).subscribe({
      next: (data) => {
        console.log('Utilisateur ajouté:', data);
        // Réinitialiser le formulaire
        this.newUser = { name: '', email: '' };
        // Recharger la liste
        this.loadUsers();
        alert('✅ Utilisateur ajouté avec succès !');
      },
      error: (err) => {
        console.error('Erreur ajout:', err);
        this.error = 'Erreur lors de l\'ajout: ' + err.message;
        this.loading = false;
      }
    });
  }
}