import { Component, OnInit, Directive } from '@angular/core';
import {map, debounceTime} from 'rxjs/operators'

import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  FormArray,
  AbstractControl,
  AsyncValidator,
  NG_ASYNC_VALIDATORS
} from "@angular/forms"
import { Observable, Subject } from 'rxjs'
import { ServiceService } from './service.service';
import { debounce } from 'rxjs/operators';
@Component({
  selector: 'app-signup',
  templateUrl: 'signup.component.html'
})
export class SignupComponent implements OnInit {
  myForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private service: ServiceService) {
    this.myForm = formBuilder.group({
      'signup' : formBuilder.group({
          'firstname': [],
          'lastname': [],
          'email': ['', [
            Validators.required,
            Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")],
            this.asyncEmailValidator.bind(this)
          ],
          'password': ['', Validators.required],
          'confirmpassword':[],
          'checkbox': []
              })
    })
    this.myForm.valueChanges.subscribe(
      (data: any) => console.log(data)
        );
  }
  onSubmit() {
    console.log(this.myForm);
  }
  asyncEmailValidator(control: FormControl): Promise<any> | Observable<any> {
     return new Promise(resolve => {
          this.service.isuserexist({email: control.value})
          .subscribe(res =>{
              return res? resolve({"invalid":true}): resolve(null)
          });
    });

  }

  
 

  ngOnInit() {
  }
}


