import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Tournament} from "../model/tournament";
import {Constants} from "../../constants";
import {Format} from "../validators/format";
import {Date} from "../validators/date";
import {League} from "../../leagues/model/league";

@Component({
  selector: 'app-tournament-form',
  templateUrl: './tournament-form.component.html',
  styleUrls: ['./tournament-form.component.scss']
})
export class TournamentFormComponent implements OnInit {
  @Input() tournament: Tournament = null;
  public tournamentForm: FormGroup;
  public name: FormControl;
  public description: FormControl;
  public format: FormControl;
  public rel: FormControl;
  public private: FormControl;
  public location: FormControl;
  public league: FormControl;
  public online: FormControl;
  public startDate: FormControl;
  private saving: boolean = false;
  public validFormats: string[] = Constants.MTG_FORMATS;
  public validRELs: string[] = Constants.REL_LEVELS;
  public validLeagues: League[];

  constructor(){}

  ngOnInit() {
    this.name = new FormControl('', [
      Validators.required
    ]);
    this.description = new FormControl('', []);
    this.private = new FormControl('', []);
    this.format = new FormControl('', [
      Validators.required,
      Format.isValid,
    ]);
    this.rel = new FormControl('', [
      Validators.required
    ]);
    this.location = new FormControl('', [
      Validators.required
    ]);
    this.rel = new FormControl('', []);
    this.league = new FormControl('', []);
    this.private = new FormControl('', []);
    this.online = new FormControl('', []);
    this.startDate = new FormControl('', [
      Validators.required,
      Date.isValid,
      Date.isFutureDate,
    ]);

    this.tournamentForm = new FormGroup({
      name: this.name,
      description: this.description,
      format: this.format,
      rel: this.rel,
      private: this.private,
      location: this.location,
      league: this.league,
      online: this.online,
      startDate: this.startDate
    });

    if (this.tournament !== null) {
      this.tournamentForm.setValue({
        name: this.tournament.name,
        description: this.tournament.description,
        private: this.tournament.isPrivate,
        format: this.tournament.format,
        rel: this.tournament.rel,
        location: this.tournament.location,
        league: this.tournament.league,
        online: this.tournament.isOnline,
        startDate: this.tournament.startDate,
      })
    }
  }

  isSaving() {
    return this.saving;
  }

  submit() {
    if (this.tournament) {
      // update

      return;
    }

    // Create a new tournament.
  }
}
