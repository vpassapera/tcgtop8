import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Password} from "../validators/password";
import {ToasterService} from "angular2-toaster";
import {sprintf} from 'sprintf-js';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  public registrationForm: FormGroup;
  public username: FormControl;
  public email: FormControl;
  public password: FormControl;
  public passwordConfirmation: FormControl;
  private registering: boolean = false;

  constructor(
    private toasterService: ToasterService,
    private titleService: Title
  ) {
    this.titleService.setTitle('FreeTop8::Register')
  }

  ngOnInit() {
    this.username = new FormControl('', [
      Validators.required
    ]);

    this.email = new FormControl('', [
      Validators.required,
      Validators.email
    ]);

    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Password.hasCapitalCase,
      Password.hasLowerCaseLetter,
      Password.hasNumber,
      Password.hasSpecialCharacter
    ]);

    this.passwordConfirmation = new FormControl('', [
      Validators.required
    ]);

    this.registrationForm = new FormGroup({
      username: this.username,
      email: this.email,
      password: this.password,
      passwordConfirmation: this.passwordConfirmation
    }, {
      validators: Password.isMatchingPassword
    });
  }

  isRegistering(): boolean {
    return this.registering;
  }

  submit() {
    if (this.registrationForm.valid) {
      this.registering = true;
      this.toasterService.pop(
        'success',
        'Registration successful!',
        sprintf('Welcome back %s!', this.username.value)
      );
      this.registering = false;
    }
  }
}
