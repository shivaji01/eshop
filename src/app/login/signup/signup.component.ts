import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
signUpForm!:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.createFormstructure();
  }

  createFormstructure()
  {
    this.signUpForm=this.fb.group({
      "firstName":['',[Validators.required, Validators.minLength(2), Validators.maxLength(10), Validators.pattern("^[a-zA-Z]+$")]],
      "LastName":['',[Validators.required, Validators.minLength(2), Validators.maxLength(10), Validators.pattern("^[a-zA-Z]+$")]],
      "MobileNumber":['',[Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      "DateOfBirth":['',[Validators.required, Validators.minLength(2), Validators.maxLength(10), Validators.pattern("^[a-zA-Z]+$")]],
      "emailId":['',[Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      "password":['',[Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      "ConfirmPassword":['',[Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
      "isFormaccept":[false,[Validators.required]],
      "address": this.fb.group({
        "line1":['',[Validators.required, Validators.minLength(2)]],
        "line2":['',[Validators.required, Validators.minLength(2)]],
        "city":['',[Validators.required, Validators.minLength(2)]],
        "state":['',[Validators.required, Validators.minLength(2)]],
        "pincode":['',[Validators.required, Validators.minLength(2), Validators.maxLength(10)]]
    })
    })
  }


  signupshowpage={
    "firstname":"",
    "LastName":"",
    "MobileNumber":null,
    "DateOfBirth":"",
    "emailId":"",
    "password":"",
    "ConfirmPassword":"",
    "address":{
      "line1":"",
      "line2":"",
      "city":"",
      "state":"",
      "pincode":null  
    }
  }


  OnSubmitform()
  {
    console.log("Form Values:", this.signUpForm.value)
  }
}
