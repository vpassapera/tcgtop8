import {AbstractControl, ValidationErrors} from "@angular/forms";
import * as moment from "moment";


export class Date {
  static isValid(c: AbstractControl): ValidationErrors | null {
    if (moment(c.value).isValid()) {
      return null;
    }

    return { badDate: true }
  }

  static isFutureDate(c: AbstractControl): ValidationErrors | null {
    if (moment().diff(moment(c.value), 'days') < 0) {
      return null;
    }

    return { notFuture: true }
  }
}
