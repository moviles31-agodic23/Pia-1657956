
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  regForm: FormGroup

  constructor(public formBuilder:FormBuilder,
      public loadingCtrl: LoadingController,
    public auth: AuthService,
    public router: Router,
    ) { }

  ngOnInit() {
    this.regForm=this.formBuilder.group({
      fullname :['',[Validators.required]],
      email : ['',[
        Validators.required,
        Validators.email,
      ]],
      password:['',
      Validators.required
    ]


    })

  }
  get errorControl(){
    return this.regForm?.controls;
  }
  async signUp(){
    const loading = await this.loadingCtrl.create();
    await loading.present();
    if(this.regForm?.valid){  
      const user=await this.auth.registerUser(this.regForm.value.email,this.regForm.value.password).catch((error)=>{
 
        console.log(error);
        loading.dismiss()

      })

      if (user){
        loading.dismiss()
        this.router.navigateByUrl['/login'];
      }else{
        console.log('valores incorrectos')
      }

    }


  }



  async toLogIn() {
    this.router.navigate(['/login'])
  }


}
