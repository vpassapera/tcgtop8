import {AbstractControl, ValidationErrors} from "@angular/forms";

export class Password {
  static isPattern(c: AbstractControl, regex: RegExp, error: ValidationErrors): ValidationErrors | null {
    if (!c.value) {
      // if control is empty return no error
      return null;
    }
    const valid = regex.test(c.value);

    return valid ? null : error;
  }

  static isMatchingPassword(c: AbstractControl): ValidationErrors | null {
    let password = c.get(['password']);
    let confirmPassword = c.get(['passwordConfirmation']);

    if (password.value !== confirmPassword.value) {
      return { mismatchedPasswords: true };
    }
    return null;
  }

  static hasNumber(c: AbstractControl): ValidationErrors | null {
    return Password.isPattern(c, /\d/, { hasNumber: true });
  }

  static hasCapitalCase(c: AbstractControl): ValidationErrors | null {
    return Password.isPattern(c, /[A-Z]/, { hasCapitalCase: true });
  }

  static hasLowerCaseLetter(c: AbstractControl): ValidationErrors | null {
    return Password.isPattern(c, /[a-z]/, { hasLowerCase: true });
  }

  static hasSpecialCharacter(c: AbstractControl): ValidationErrors | null {
    return Password.isPattern(c, /[!@#$%^&*(),.?":{}|<>]/, { hasSpecialCharacter: true });
  }
}
