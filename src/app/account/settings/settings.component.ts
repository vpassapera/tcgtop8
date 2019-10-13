import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  public validTimeZones: string[];
  public settings: FormGroup;
  public firstName: FormControl;
  public lastName: FormControl;
  public formats: FormControl;
  public timeZone: FormControl;
  public leagues: FormControl;
  private saving: boolean = false;


  constructor() { }

  ngOnInit() {
  }

}
