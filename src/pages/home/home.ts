import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//Custom Imports
import { Alert, AlertController, Loading, LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthProvider } from '../../providers/auth/auth';
import { RegistrationPage } from '../../pages/registration/registration';
import { EmailValidator } from '../../validators/email';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public loginForm:FormGroup
  public loading:Loading

  constructor(public navCtrl: NavController,
      public authProv: AuthProvider,
      public alertCtrl: AlertController,
      public loadCtrl: LoadingController,
      formBuilder:FormBuilder) {

        this.loginForm = formBuilder.group({
          username:[''],
          email:['', Validators.compose([Validators.required, EmailValidator.isValid])],
          password:['']
        })
  }

  goToRegister(){
    this.navCtrl.push("RegistrationPage")
  }

 

}
