import {AbstractControl, ValidationErrors} from "@angular/forms";
import {Constants} from "../../constants";

export class Format {
  static isValid(c: AbstractControl): ValidationErrors | null {
    if (Constants.MTG_FORMATS.includes(c.value)) {
      return null;
    }

    return { badFormat: true }
  }
}
