import {Injectable} from "@angular/core";
import {PASSWORD_STRENGTH} from "../enums/password.enums";
import {ɵValue} from "@angular/forms";

@Injectable({providedIn: "root"})
export class PasswordService{

  constructor() {
  }
  public hasLetters(str: string): boolean{
    return /[a-zA-Z]/.test(str);
  }
  public hasNumber(str: string): boolean{
    return /\d/.test(str);
  }
  public hasSymbols(str: string): boolean{
    return /[@#$%^&*()!]/.test(str);
  }

  public checkStrengthPassword(password: string ): PASSWORD_STRENGTH {
    let passwordStrength: PASSWORD_STRENGTH;
    const length = password.length;
    const hasLetters = this.hasLetters(password);
    const hasNumber = this.hasNumber(password);
    let hasSymbols = this.hasSymbols(password);

    if (length === 0) {
      passwordStrength = PASSWORD_STRENGTH.EMPTY;
    } else if (hasLetters && hasNumber && hasSymbols) {
      passwordStrength = PASSWORD_STRENGTH.STRONG;
    } else if ((hasLetters && hasNumber) || (hasLetters && hasSymbols) || (hasNumber && hasSymbols)) {
      passwordStrength = PASSWORD_STRENGTH.MEDIUM;
    } else {
      passwordStrength = PASSWORD_STRENGTH.EASY;
    }

    return passwordStrength;
  }
}


