import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
  standalone: true,
  imports: [IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonButton]
})
export class AlumnoPage implements OnInit {

  constructor(private router: Router ) {}

  ngOnInit() {
  }

  home(){
    this.router.navigate(['/home'], { replaceUrl: true }); 
  }

  contra(){
    this.router.navigate(['/contra'], { replaceUrl: true }); 
  }
}
