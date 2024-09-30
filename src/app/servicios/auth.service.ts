import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WebService } from './web.service';
import { UsuarioAPI } from '../models/UsuarioAPI.models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Para mostrar el estado del login
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  private usuarioSubject = new BehaviorSubject<string>(''); // Mostrar nombre de usuario
  usuario$ = this.usuarioSubject.asObservable();

  private usuarioCompletoSubject = new BehaviorSubject<UsuarioAPI>(null); // Mostrar usuario completo
  usuarioCompleto$ = this.usuarioCompletoSubject.asObservable();

  private loginFailedSubject = new BehaviorSubject<boolean>(false); // Indicar si falló el login
  loginFailed$ = this.loginFailedSubject.asObservable();

  webservice = inject(WebService); // Obtener el servicio de WebService

  // Método para hacer la solicitud a la nueva API
  async buscarBD4(usuario: string, clave: string) {
    const url = 'https://66f59e81436827ced9749e0d.mockapi.io/Usuarios'; // Nueva URL
    const res = await this.webservice.request('GET', url, '') as Array<UsuarioAPI>;

    const user = res.find(u => u.user === usuario && u.pass === clave); // Buscar usuario
    if (user) {
      console.log('Autenticación exitosa!');
      console.log(user);
      this.isAuthenticatedSubject.next(true); // Actualizar estado de autenticación
      this.usuarioSubject.next(user.user); // Actualizar el nombre del usuario
      this.usuarioCompletoSubject.next(user); // Actualizar objeto completo del usuario
      this.loginFailedSubject.next(false); // Resetear estado de login fallido
    } else {
      this.isAuthenticatedSubject.next(false); // Fallo en autenticación
      this.loginFailedSubject.next(true); // Mostrar error de login
    }
  }
}
