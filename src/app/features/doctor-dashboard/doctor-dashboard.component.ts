import { Component } from '@angular/core';

@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.css']
})
export class DoctorDashboardComponent {
  currentDate = new Date();
  selectedPeriod = 'week';

  // Statistiques avec thème bleu médical
  statistics = [
    { 
      icon: 'bi bi-people-fill', 
      value: '245', 
      label: 'Patients Actifs',
      bgColor: 'linear-gradient(135deg, #3498db, #2980b9)',
      trend: 12
    },
    { 
      icon: 'bi bi-calendar-check-fill', 
      value: '18', 
      label: 'Rendez-vous Aujourd\'hui',
      bgColor: 'linear-gradient(135deg, #e74c3c, #c0392b)',
      trend: -3
    },
    { 
      icon: 'bi bi-chat-dots-fill', 
      value: '7', 
      label: 'Consultations en ligne',
      bgColor: 'linear-gradient(135deg, #f39c12, #e67e22)',
      trend: 25
    },
    { 
      icon: 'bi bi-file-medical-fill', 
      value: '12', 
      label: 'Nouveaux dossiers',
      bgColor: 'linear-gradient(135deg, #2ecc71, #27ae60)',
      trend: 8
    }
  ];

  // Rendez-vous du jour
  todayAppointments = [
    {
      time: '09:00',
      patientName: 'Jean Dupont',
      age: 58,
      type: 'Consultation diabète',
      status: 'confirmed',
      reason: 'Contrôle glycémique',
      lastVisit: '2024-02-10',
      avatar: 'assets/images/patients/patient1.jpg'
    },
    {
      time: '10:30',
      patientName: 'Marie Lambert',
      age: 42,
      type: 'Nouveau patient',
      status: 'pending',
      reason: 'Première consultation',
      lastVisit: null,
      avatar: 'assets/images/patients/patient2.jpg'
    },
    {
      time: '11:45',
      patientName: 'Pierre Martin',
      age: 65,
      type: 'Suivi mensuel',
      status: 'confirmed',
      reason: 'Résultats analyses',
      lastVisit: '2024-01-15',
      avatar: 'assets/images/patients/patient3.jpg'
    },
    {
      time: '14:00',
      patientName: 'Sophie Bernard',
      age: 35,
      type: 'Consultation urgente',
      status: 'urgent',
      reason: 'Hypoglycémie',
      lastVisit: '2024-02-18',
      avatar: 'assets/images/patients/patient4.jpg'
    },
    {
      time: '15:30',
      patientName: 'Ahmed Benali',
      age: 52,
      type: 'Télémédecine',
      status: 'online',
      reason: 'Suivi à distance',
      lastVisit: '2024-02-05',
      avatar: 'assets/images/patients/patient5.jpg'
    },
    {
      time: '16:45',
      patientName: 'Fatima Zahra',
      age: 48,
      type: 'Consultation',
      status: 'confirmed',
      reason: 'Éducation thérapeutique',
      lastVisit: '2024-01-28',
      avatar: 'assets/images/patients/patient6.jpg'
    }
  ];

  // Demandes de consultation en ligne
  onlineRequests = [
    {
      patientName: 'Karim El Fassi',
      age: 45,
      reason: 'Douleurs neuropathiques',
      urgency: 'high',
      time: 'Il y a 5 min',
      avatar: 'assets/images/patients/patient7.jpg'
    },
    {
      patientName: 'Nadia Tazi',
      age: 38,
      reason: 'Question sur traitement',
      urgency: 'medium',
      time: 'Il y a 15 min',
      avatar: 'assets/images/patients/patient8.jpg'
    },
    {
      patientName: 'Omar Bennis',
      age: 62,
      reason: 'Résultats analyses',
      urgency: 'low',
      time: 'Il y a 30 min',
      avatar: 'assets/images/patients/patient9.jpg'
    }
  ];

  // Analyses en attente
  pendingAnalyses = [
    {
      patientName: 'Jean Dupont',
      type: 'Analyse sanguine',
      date: '2024-02-23',
      status: 'urgent',
      doctor: 'Dr. Martin'
    },
    {
      patientName: 'Marie Lambert',
      type: 'Image langue (CNN)',
      date: '2024-02-23',
      status: 'pending',
      doctor: 'Dr. Martin'
    },
    {
      patientName: 'Pierre Martin',
      type: 'Glycémie (ML)',
      date: '2024-02-22',
      status: 'completed',
      doctor: 'Dr. Martin'
    },
    {
      patientName: 'Sophie Bernard',
      type: 'Analyse urinaire',
      date: '2024-02-22',
      status: 'pending',
      doctor: 'Dr. Martin'
    }
  ];

  // Derniers patients vus
  recentPatients = [
    {
      name: 'Lucie Moreau',
      age: 29,
      lastVisit: '2024-02-23',
      diagnosis: 'Diabète gestationnel',
      nextAppointment: '2024-03-15',
      status: 'stable'
    },
    {
      name: 'Thomas Petit',
      age: 55,
      lastVisit: '2024-02-22',
      diagnosis: 'Diabète type 2',
      nextAppointment: '2024-03-01',
      status: 'warning'
    },
    {
      name: 'Claire Dubois',
      age: 47,
      lastVisit: '2024-02-21',
      diagnosis: 'Diabète type 1',
      nextAppointment: '2024-03-10',
      status: 'critical'
    }
  ];

  // Messages récents
  recentMessages = [
    {
      from: 'Patient Karim',
      message: 'J\'ai des picotements dans les pieds',
      time: '10:30',
      unread: true
    },
    {
      from: 'Laboratoire',
      message: 'Résultats disponibles',
      time: '09:15',
      unread: true
    },
    {
      from: 'Dr. Sophie',
      message: 'Confirmation staff',
      time: 'Hier',
      unread: false
    }
  ];

  // Données pour le graphique
  weeklyPatients = [23, 28, 25, 32, 30, 18, 15];
  weekDays = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
  maxPatients = 35;

  // Alertes médicales
  medicalAlerts = [
    {
      patient: 'Thomas Petit',
      alert: 'Glycémie très élevée (2.4 g/L)',
      severity: 'high',
      time: 'Il y a 1h'
    },
    {
      patient: 'Claire Dubois',
      alert: 'Rappel: Consultation annuelle',
      severity: 'medium',
      time: 'Il y a 3h'
    },
    {
      patient: 'Jean Dupont',
      alert: 'Ordonnance à renouveler',
      severity: 'low',
      time: 'Il y a 5h'
    }
  ];

  constructor() { }

  refreshData() {
    console.log('Rafraîchissement des données...');
    alert('Données actualisées avec succès !');
  }

  startConsultation(patient: any) {
    alert(`Démarrer consultation avec: ${patient.patientName || patient.name}`);
  }

  viewPatient(patient: any) {
    alert(`Fiche patient: ${patient.patientName || patient.name}`);
  }

  viewAnalysis(analysis: any) {
    alert(`Analyse: ${analysis.type} pour ${analysis.patientName}`);
  }

  acceptRequest(request: any) {
    alert(`Demande acceptée pour: ${request.patientName}`);
  }

  viewMessage(message: any) {
    alert(`Message de: ${message.from}`);
  }

  handleAlert(alert: any) {
    alert(`Traitement alerte: ${alert.alert}`);
  }

  getStatusClass(status: string): string {
    const classes = {
      'confirmed': 'bg-success bg-opacity-10 text-success',
      'pending': 'bg-warning bg-opacity-10 text-warning',
      'urgent': 'bg-danger bg-opacity-10 text-danger',
      'online': 'bg-info bg-opacity-10 text-info',
      'completed': 'bg-success bg-opacity-10 text-success',
      'stable': 'bg-success bg-opacity-10 text-success',
      'warning': 'bg-warning bg-opacity-10 text-warning',
      'critical': 'bg-danger bg-opacity-10 text-danger'
    };
    return classes[status as keyof typeof classes] || 'bg-secondary bg-opacity-10 text-secondary';
  }

  getUrgencyBadge(urgency: string): string {
    const classes = {
      'high': 'bg-danger text-white',
      'medium': 'bg-warning text-dark',
      'low': 'bg-info text-white'
    };
    return classes[urgency as keyof typeof classes] || 'bg-secondary text-white';
  }
}