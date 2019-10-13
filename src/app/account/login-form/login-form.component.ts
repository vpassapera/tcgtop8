import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  public returnUrl: string;
  public loginForm: FormGroup;
  public username: FormControl;
  public password: FormControl;
  public rememberMe: FormControl;
  private authenticating: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  isAuthenticating(): boolean {
    return this.authenticating;
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    this.username = new FormControl('', [
      Validators.required
    ]);

    this.password = new FormControl('', [
      Validators.required
    ]);

    this.rememberMe = new FormControl('');
    this.loginForm = new FormGroup({
      username: this.username,
      password: this.password,
      rememberMe: this.rememberMe,
    });
  }

  submit() {
    if (this.loginForm.valid) {
      this.authenticating = true;
    }
  }


}
