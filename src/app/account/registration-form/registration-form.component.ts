import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class RegistrationFormComponent implements OnInit {
  public static validFormats: string[] = [
    'legacy',
    'modern',
    'pioneer',
    'standard',
    'commander'
  ];
  public registrationForm: FormGroup;
  public username: FormControl;
  public firstName: FormControl;
  public lastName: FormControl;
  public formats: FormControl;
  public password: FormControl;
  private registering: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
