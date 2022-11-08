import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  registationForm = new FormGroup({
    firstName : new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    lastName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    mobileNo: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.pattern('[0-9]+$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]),
  })

  registationFormSubmit(){
    console.log(this.registationForm.value);
  }

  get firstName(){
    return this.registationForm.get('firstName');
  }
  get lastName(){
    return this.registationForm.get('lastName');
  }
  get mobileNo(){
    return this.registationForm.get('mobileNo');
  }
  get email(){
    return this.registationForm.get('email');
  }
  get password(){
    return this.registationForm.get('password');
  }
}
