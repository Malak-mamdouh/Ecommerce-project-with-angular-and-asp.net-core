import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup, Validators } from '@angular/forms';
import { RegisterModel } from '../../models/register-model';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private regService: RegisterService) { }

  reg: RegisterModel;
  userForm: FormGroup;
  message: string;
  regex: RegExp;
  isbusy: boolean;
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
      NotMatch: 'Not Match'
    }
  };
  ngOnInit(): void {
    this.isbusy = false;
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
      this.message = 'you have registered successfuly';
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
    if (name != null && name !== '' && this.isbusy === false){
      this.regService.UserNameExist(name).subscribe(suc => {
        this.messageValidate.username.nameExist = 'This name is used';
      }, err => console.log(err));
      return true;
    }
    return false;
  }
  isEmailExist(){
    const email = this.userForm.value.email;
    if (email != null && email !== '' && this.isbusy === false){
      this.regService.EmailExist(email).subscribe(succ => {
        this.messageValidate.email.emailExist = 'Email is used';
    } , err => console.log(err));
      return true;
    }
    return false;
  }
}
