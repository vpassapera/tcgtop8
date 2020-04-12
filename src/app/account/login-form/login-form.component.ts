import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ToasterService} from 'angular2-toaster';
import {faLock, faUser} from "@fortawesome/free-solid-svg-icons";
import {sprintf} from 'sprintf-js';
import {IconDefinition} from "@fortawesome/fontawesome-common-types";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  public returnUrl: string;
  public loginForm: FormGroup;
  public username: FormControl;
  public password: FormControl;
  public rememberMe: FormControl;
  public faLock: IconDefinition = faLock;
  public faUser: IconDefinition = faUser;
  private authenticating: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toasterService: ToasterService,
    private titleService: Title
  ) {
    this.titleService.setTitle('FreeTop8::Login')
  }

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
      this.toasterService.pop(
        'success',
        'Authentication successful!',
        sprintf('Welcome aboard %s!', this.username.value)
      );
      this.authenticating = false;
    }
  }
}
