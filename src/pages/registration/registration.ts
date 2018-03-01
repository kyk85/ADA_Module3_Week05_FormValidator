import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Custom Imports
import { Alert, AlertController, Loading, LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthProvider } from '../../providers/auth/auth';
import { UsernameValidator } from '../../validators/username';
import { EmailValidator } from '../../validators/email';
import { PasswordValidator } from '../../validators/password';



/**
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {

  public registrationForm:FormGroup

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public authProv: AuthProvider,
     public alertCtrl: AlertController,
     public loadCtrl: LoadingController,
     formBuilder:FormBuilder) {

    this.registrationForm = formBuilder.group({
      username:['', Validators.compose([Validators.required, UsernameValidator.isValid])],
      email:['', Validators.compose([Validators.required, Validators.email])],
      password:['', Validators.compose([Validators.required, PasswordValidator.isValid])],
      age:['', Validators.compose([Validators.required, Validators.min(18), Validators.max(99)])],
      occupation:['']
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }

}
