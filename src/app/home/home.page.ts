import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonInput, IonButton } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButton, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonInput]
})
export class HomePage implements OnInit {
  
  username: string = '';  // Variable para el nombre de usuario
  password: string = '';  // Variable para la contraseña

  // Definimos las credenciales de los usuarios
  private users = {
    alumno: '1234',
    profesor: '5678'
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // Función para manejar el inicio de sesión
  login() {
    if (this.username === 'alumno' && this.password === this.users.alumno) {
      console.log('Navegando a Alumno');
      this.router.navigate(['/alumno'], { replaceUrl: true });
    } else if (this.username === 'profe' && this.password === this.users.profesor) {
      console.log('Navegando a Profesor');
      this.router.navigate(['/profesor'], { replaceUrl: true });
    } else {
      console.log('Credenciales incorrectas');
      // Aquí puedes mostrar un mensaje de error al usuario
    }
  }
}
