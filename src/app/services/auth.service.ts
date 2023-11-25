import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import firebase from 'firebase/compat/app';
import {AngularFireAuth} from '@angular/fire/compat/auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  constructor(private auth:AngularFireAuth) { }  


 
  // Iniciar sesión
  async login(email: string, password: string) {
    localStorage.setItem('token',Math.random().toString());
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  // Cerrar sesión
    async signOut() {
      return this.auth.signOut();
    }
 //registro
  async registerUser(email:string,password:string){
    return await this.auth.createUserWithEmailAndPassword(email,password);
  }


  // Obtener el estado de autenticación del usuario
  getAuthState() {
    return false
  }
 
  async getProfile(){
    return await this.auth.currentUser;
  }
  

}
