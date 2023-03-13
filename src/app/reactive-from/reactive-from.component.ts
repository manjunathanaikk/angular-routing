import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-from',
  templateUrl: './reactive-from.component.html',
  styleUrls: ['./reactive-from.component.css'],
})
export class ReactiveFromComponent implements OnInit {
  genders = ['male', 'female'];
  ristrictedNames = ['Manju'];
  signUpForm: FormGroup = new FormGroup({
    // userData: new FormGroup({
    userName: new FormControl('', [
      Validators.required,
      this.isRestrictedNames.bind(this),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    // }),
    gender: new FormControl('male', Validators.required),
    hobbies: new FormArray([]),
  });
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.signUpForm.valueChanges.subscribe((res) => {
      console.log(res);
    });
    this.signUpForm.statusChanges.subscribe((res) => {
      console.log(res);
    });

    this.signUpForm.setValue({
      userName: 'Manju',
      email: 'manju@gmail.com',
      gender: 'male',
      hobbies: [],
    });
    // this.signUpForm.patchValue({
    //   userName: 'Manju',
    //   hobbies: [],
    // });
  }
  onSubmit() {
    console.log(this.signUpForm.value);
    this.signUpForm.reset();
  }
  get f() {
    return this.signUpForm.controls;
  }
  onAddHobby() {
    const control = new FormControl(null, [Validators.required]);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }
  get hobbyControls() {
    return (<FormArray>this.signUpForm.get('hobbies')).controls;
  }
  isRestrictedNames(control: FormControl): { [s: string]: boolean } {
    if (this.ristrictedNames.includes(control.value)) {
      return { nameIsRestricted: true };
    }
    return { nameIsRestricted: false };
  }
  isRestrictedEmails(control: FormControl): Promise<any> | Observable<any> {
    let promise = new Promise((reslove, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          reslove({ emailIsRestricted: true });
        } else {
          reslove({ emailIsRestricted: false });
        }
      }, 2000);
    });
    return promise;
  }
}
