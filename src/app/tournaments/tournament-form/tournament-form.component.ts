import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Tournament} from "../model/tournament";
import {Constants as AppConstants} from "../../constants";
import {Constants} from "../constants";
import {Format} from "../validators/format";
import {Rel} from "../validators/rel";
import {Date} from "../validators/date";
import {League} from "../../leagues/model/league";
import {Bracket} from "../validators/bracket";
import {Location} from "../validators/location";

@Component({
  selector: 'app-tournament-form',
  templateUrl: './tournament-form.component.html',
  styleUrls: ['./tournament-form.component.scss']
})
export class TournamentFormComponent implements OnInit {
  @Input() tournament: Tournament = null;
  @Input() requestedFormat?: string = null;
  public tournamentForm: FormGroup;
  public name: FormControl;
  public description: FormControl;
  public format: FormControl;
  public bracketType: FormControl;
  public rel: FormControl;
  public maxPlayerCount: FormControl;
  public private: FormControl;
  public location: FormControl;
  public locationDetails: FormControl;
  public league: FormControl;
  public online: FormControl;
  public startDate: FormControl;
  private saving: boolean = false;
  public validFormats: string[] = AppConstants.MTG_FORMATS;
  public validRELs: string[] = Constants.REL_LEVELS;
  public validBrackets: string[] = Constants.BRACKET_TYPES;
  public validLocations: string[] = Constants.VALID_LOCATIONS;
  public validLeagues: League[];

  constructor(){}

  ngOnInit() {
    let formatState = (this.requestedFormat !== null) ? {
      value: this.requestedFormat.toLowerCase(),
      disabled: (this.requestedFormat !== null)
    } : {
      value: this.tournament.format.toLowerCase()
    };

    this.name = new FormControl('', [
      Validators.required
    ]);

    this.description = new FormControl('', []);

    this.private = new FormControl('', []);

    this.format = new FormControl(formatState, [
        Validators.required,
        Format.isValid,
    ]);

    this.rel = new FormControl('', [
      Validators.required,
      Rel.isValid
    ]);

    this.maxPlayerCount = new FormControl('', [
      Validators.pattern(/^\d+$/),
      Validators.min(6),
      Validators.required,
    ]);

    this.bracketType = new FormControl('', [
      Validators.required,
      Bracket.isValid
    ]);

    this.location = new FormControl('', [
      Validators.required,
      Location.isValid,
    ]);

    this.locationDetails = new FormControl('', []);

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
      bracketType: this.bracketType,
      rel: this.rel,
      maxPlayerCount: this.maxPlayerCount,
      private: this.private,
      location: this.location,
      locationDetails: this.locationDetails,
      league: this.league,
      online: this.online,
      startDate: this.startDate
    });

    if (this.tournament !== null) {
      this.tournamentForm.patchValue({
        name: this.tournament.name,
        description: this.tournament.description,
        private: this.tournament.isPrivate,
        format: this.tournament.format,
        bracketType: this.tournament.bracketType,
        rel: this.tournament.rel,
        maxPlayerCount: this.tournament.maxPlayerCount,
        location: this.tournament.location,
        locationDetails: this.tournament.locationDetails,
        league: this.tournament.league,
        online: this.tournament.isOnline,
        startDate: this.tournament.startDate,
      });
    }
  }

  mandatoryLocationDetails(value) {
    if (value == 'other') {
      this.tournamentForm.controls["locationDetails"].setValidators(Validators.required);
    } else {
      this.tournamentForm.controls["locationDetails"].setValidators([]);
    }

    this.tournamentForm.controls["locationDetails"].updateValueAndValidity();
  }

  isSaving() {
    return this.saving;
  }

  submit() {
    this.saving = true;
    if (this.tournament) {
      // update

      return;
    }
    // Create a new tournament.
  }
}
