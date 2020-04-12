import {AbstractControl, ValidationErrors} from "@angular/forms";
import {Constants} from "../../constants";

export class Rel {
  static isValid(c: AbstractControl): ValidationErrors | null {
    if (Constants.REL_LEVELS.includes(c.value)) {
      return null;
    }

    return { badRel: true }
  }
}
