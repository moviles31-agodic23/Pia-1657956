import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { response } from 'express';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {

  loginform: FormGroup

  constructor(
    public formBuilder: FormBuilder,
    public loadingCtrl: LoadingController,
    public auth: AuthService,
    private router:Router
  
  ) {
    
}
  redirectToTabs() {
    this.router.navigate(['/tabs']);
  }
  ngOnInit() {
    this.loginform = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email,
      ]],
      password: ['',
        Validators.required
      ]
    })
  }
  get errorControl() {
    return this.loginform?.controls;
  }
  async login() {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    if (this.loginform?.valid) {
      const user = await this.auth.login(this.loginform.value.email, this.loginform.value.password).catch((error) => {

        console.log(error);
        loading.dismiss()

      })

      if (user) {
        loading.dismiss() 
        this.router.navigate(['/tabs'])
      } else {
        console.log('valores incorrectos')
      }

    }
  }

  async toSignup(){
    this.router.navigate(['/signup'])
  }

  async volverInicio() {
    this.router.navigate(['/inicio'])
  }

}
