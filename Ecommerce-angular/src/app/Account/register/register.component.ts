import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterModel } from '../../models/register-model';
import { RegisterService } from '../../services/register.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private regService: RegisterService , 
              private router: Router) { }

  reg: RegisterModel;
  userForm: FormGroup;
  message: string;
  regex: RegExp;
  isbusy: boolean;
  EmailExist: boolean;
  NameExist: boolean;
  messageValidate = {
    username: {
      required: 'User Name is required',
      nameExist: ''
    },
    email: {
      required: 'Email is required',
      emailExist: ''
    },
    pass: {
      required: 'Password is required',
      minLength: 'Password should be at least 8 Characters',
      notValid: 'Password should contains at least one capital character - small character - special Character - digits'
    },
    passConfirm: {
      required: 'Password is required',
      minLength: 'Password should be at least 8 Characters',
      NotMatch: 'Password is not Matching'
    }
  };
  ngOnInit(): void {
    this.isbusy = false;
    this.NameExist = false;
    this.EmailExist = false;
    this.message = '';
    this.reg = {
      userName: '',
      email: '',
      password: ''
    };
    this.userForm = this.fb.group({
      userName: ['', Validators.required ] ,
      email: ['', [Validators.required, Validators.email]] ,
      password: ['' , [Validators.required , Validators.minLength(8)]],
      passwordConfirm: ['' , [Validators.required , Validators.minLength(8)]]
    });
    this.userForm.valueChanges.subscribe(success => {
      if (this.userForm.status == 'VALID')
      {
        console.log('Form valid');
        this.isbusy = true;
      }
    }, ex => console.log(ex));
  }

  register(){
    this.validateRegisterModel();
    this.regService.Register(this.reg).subscribe(success => {
      this.router.navigate(['login']);
    } , err => console.log(err));
    this.userForm.reset();
    this.userForm.value.password = '';
    this.messageValidate.email.emailExist = '';
  }

  validateRegisterModel(){
    this.reg.userName = this.userForm.value.userName;
    this.reg.email = this.userForm.value.email;
    this.reg.password = this.userForm.value.password;
  }

  passwordNotMatch(){
    if (this.userForm.value.password !== '' && this.userForm.value.passwordConfirm !== ''){
      if ((this.userForm.value.password !== this.userForm.value.passwordConfirm) &&
      this.userForm.value.password.length > 7 && this.userForm.value.passwordConfirm.length > 7){
        return true;
      }
      return false;
    }
  }

  isPasswordValid(){
    const pass = this.userForm.value.password;
    if (pass !== '' && pass.length > 7){
      this.regex = new RegExp('[a-z]');
      if (!this.regex.test(pass)){
        this.messageValidate.pass.notValid = 'password should contain at least a small character';
        return false;
      }
      this.regex = new RegExp('[A-Z]');
      if (!this.regex.test(pass)){
        this.messageValidate.pass.notValid = 'password should contain at least a capital character';
        return false;
      }
      this.regex = new RegExp('[!@#$%^&*()_+= {}]');
      if (!this.regex.test(pass)){
        this.messageValidate.pass.notValid = 'password should contain at least a special character';
        return false;
      }
      this.regex = new RegExp('[0-9]');
      if (!this.regex.test(pass)){
        this.messageValidate.pass.notValid = 'password should contain at least one digit';
        return false;
      }
    }
    return true;
  }

  isUserNameExist(){
    const name = this.userForm.value.userName;
    if (name != null && name !== ''){
      this.regService.UserNameExist(name).subscribe(suc => {
        this.messageValidate.username.nameExist = 'This name is used';
        this.NameExist = true;
      }, err => {this.messageValidate.username.nameExist = '';
                this.NameExist = false;
              });
      return true;
    }
    return false;
  }
  isEmailExist(){
    const email = this.userForm.value.email;
    if (email != null && email !== ''){
      this.regService.EmailExist(email).subscribe(succ => {
        this.messageValidate.email.emailExist = 'Email is used';
        this.EmailExist = true;
    } , err => {
      this.messageValidate.email.emailExist = '';
      this.EmailExist = false;
    });
    return true;
    }
    return false;
  }
  
}
