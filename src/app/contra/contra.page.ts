import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonLabel, IonInput, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-contra',
  templateUrl: './contra.page.html',
  styleUrls: ['./contra.page.scss'],
  standalone: true,
  imports: [IonButton, IonLabel, IonInput, IonHeader, IonToolbar, IonTitle, IonContent, CommonModule, FormsModule]
})
export class contraPage implements OnInit {
  
  username: string = '';          // Variable para el nombre de usuario
  newPassword: string = '';       // Variable para la nueva contraseña

  // Definimos las credenciales de los usuarios
  private users = {
    alumno: '1234',
    profesor: '5678'
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // Función para cambiar la contraseña
  cambiarContrasena() {
    if (this.username === 'alumno') {
      this.users.alumno = this.newPassword; // Cambiar la contraseña del alumno
      console.log('Contraseña del alumno cambiada');
    } else if (this.username === 'profe') {
      this.users.profesor = this.newPassword; // Cambiar la contraseña del profesor
      console.log('Contraseña del profesor cambiada');
    } else {
      console.log('Nombre de usuario no encontrado');
      // Aquí puedes mostrar un mensaje de error al usuario
    }

    // Opcional: Puedes limpiar los campos después de cambiar la contraseña
    this.username = '';
    this.newPassword = '';
  }
}
