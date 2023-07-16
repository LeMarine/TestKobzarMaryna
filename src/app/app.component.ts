import { Component } from '@angular/core';
enum PASSWORD_STRENGTH {
  EMPTY = '',
  EASY = 'easy',
  MEDIUM = 'medium',
  STRONG = 'strong'
}

enum COLOR_STRENGTHS {
  GRAY = 'gray',
  RED = 'red',
  YELLOW = 'yellow',
  GREEN = 'green'
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password: string = '';
  passwordStrength: string = '';

  checkStrengthPassword() {
    const length = this.password.length;
    const hasLetters = /[a-zA-Z]/.test(this.password);
    const hasNumber = /\d/.test(this.password);
    let hasSymbols = /[@#$%^&*()!]/.test(this.password);

    if (length === 0) {
      this.passwordStrength = PASSWORD_STRENGTH.EMPTY;
    } else if (hasLetters && hasNumber && hasSymbols) {
      this.passwordStrength = PASSWORD_STRENGTH.STRONG;
    } else if ((hasLetters && hasNumber) || (hasLetters && hasSymbols) || (hasNumber && hasSymbols)) {
      this.passwordStrength = PASSWORD_STRENGTH.MEDIUM;
    } else {
      this.passwordStrength = PASSWORD_STRENGTH.EASY;
    }
  }

  passwordColorStrength(index: number) {
    if (this.password.length === 0) {
      return COLOR_STRENGTHS.GRAY;
    } else if (this.password.length < 8) {
      return COLOR_STRENGTHS.RED;
    } else {
      if (index === 0 && this.passwordStrength === PASSWORD_STRENGTH.EASY) {
        return COLOR_STRENGTHS.RED;
      } else if ((index === 0 || index === 1) && this.passwordStrength === PASSWORD_STRENGTH.MEDIUM) {
        return COLOR_STRENGTHS.YELLOW;
      } else if (this.passwordStrength === PASSWORD_STRENGTH.STRONG) {
        return COLOR_STRENGTHS.GREEN;
      } else {
        return COLOR_STRENGTHS.GRAY;
      }
    }
  }
}

