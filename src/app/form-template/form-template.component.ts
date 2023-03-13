import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css'],
})
export class FormTemplateComponent {
  gender = 'male';
  about = 'My name manju';
  submitted = false;
  user = { userName: '', email: '', gender: '', about: '' };
  @ViewChild('form') signUpForm?: NgForm;
  // f: NgForm
  onFormSubmit() {
    this.submitted = true;
    this.user.userName = this.signUpForm?.value.userName;
    this.user.email = this.signUpForm?.value.email;
    this.user.gender = this.signUpForm?.value.gender;
    this.user.about = this.signUpForm?.value.about;
    console.log(this.user);
    this.signUpForm?.reset();
  }
  onClickFill() {
    // this.signUpForm?.form.setValue({
    //   // userData: {
    //   email: 'Manju@gamil.com',
    //   userName: 'Manju',
    //   // },
    //   gender: 'male',
    //   about: 'About Us',
    // });
    this.signUpForm?.form.patchValue({
      // userData: {
      email: 'Manju@gamil.com',
      userName: 'Manju',
      // },
      // gender: 'male',
      // about: 'About Us',
    });
  }
}
