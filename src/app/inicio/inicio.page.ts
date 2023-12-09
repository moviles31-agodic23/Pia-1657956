import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { response } from 'express';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public auth: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  async toLogIn() {
    this.router.navigate(['/login'])
  }

  
  async toSignup() {
    this.router.navigate(['/signup'])
  }
}
