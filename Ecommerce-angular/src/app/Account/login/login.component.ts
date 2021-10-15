import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginModel } from '../../models/login-model';
import { RegisterService } from '../../services/register.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AuthModel } from '../../models/authModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private regService: RegisterService,
              private route: Router,
              private auth: AuthService) { }

  message: string;
  loginForm: FormGroup;
  logModel: LoginModel;
  authModel: AuthModel;
  messageValidate = {
    email: {
      required: 'Email is required'
    },
    pass: {
      required: 'Password is required'
    }
  };
  ngOnInit(): void {
    this.message = '';
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['' , Validators.required],
      rememberMe: false
    });
    this.logModel = {
      email: '',
      password: '',
      rememberMe: false
    };
    this.authModel = {
      roleName: '',
      token: ''
    };
  }

  Login(){
    this.validateModel();
    this.regService.UserLogin(this.logModel).subscribe(succ => {
      const rem = !!this.loginForm.value.rememberMe;
      const email = this.loginForm.value.email;
      this.authModel = succ;
      this.auth.installStorage(rem , email , this.authModel.roleName , this.authModel.token);
      this.route.navigate(['home']).then(x => {window.location.reload(); });
    } , err => {console.log(err);
                this.message = err.error; }
         );
  }

  validateModel(){
    this.logModel.email = this.loginForm.value.email;
    this.logModel.password = this.loginForm.value.password;
    this.logModel.rememberMe = this.loginForm.value.rememberMe;
  }
}
