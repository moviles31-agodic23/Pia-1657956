import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { response } from 'express';

@Component({
  selector: 'app-crear-play',
  templateUrl: './crear-play.page.html',
  styleUrls: ['./crear-play.page.scss'],
})
export class CrearPlayPage implements OnInit {

  nombre: string = '';

  constructor(
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public auth: AuthService,
    private router: Router,



  ) { }

  ngOnInit() {
  }

  async volver() {
    this.router.navigate(['/tabs'])
  }
  async crearPlay() {

    const numeroAleatorio = Math.floor(Math.random() * 1000); // Genera un número aleatorio
    this.auth.agregarImagen(this.nombre, `https://picsum.photos/300/300?random=${numeroAleatorio}`);
    this.router.navigate(['/tabs']);
  }








}
