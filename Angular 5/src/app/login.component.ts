import { Component, OnInit } from '@angular/core';
import {FormGroup,
        FormControl,
        Validators,
        FormBuilder,
        FormArray} from "@angular/forms"
import { Observable } from 'rxjs'
@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
      this.myForm = formBuilder.group({
        'loginData': formBuilder.group({
          'email': ['', [
            Validators.required,
            Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
          ]],
          'password': ['', Validators.required],

        })
      });


      this.myForm.valueChanges.subscribe(
      (data: any) => console.log(data)
      )
  }

  ngOnInit() {
  }

}
