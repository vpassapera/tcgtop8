import {AbstractControl, ValidationErrors} from "@angular/forms";
import {Constants} from "../constants";

export class Bracket {
  static isValid(c: AbstractControl): ValidationErrors | null {
    if (Constants.BRACKET_TYPES.includes(c.value)) {
      return null;
    }

    return { badBracket: true }
  }
}
