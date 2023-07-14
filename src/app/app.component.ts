import { Component } from '@angular/core';

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
      this.passwordStrength = '';
    } else if (length < 8) {
      this.passwordStrength = 'short';
    } else if ((hasLetters && hasNumber) || (hasLetters && hasSymbols) || (hasNumber && hasSymbols)) {
      this.passwordStrength = 'medium';
    } else if (hasLetters && hasNumber && hasSymbols) {
      this.passwordStrength = 'strong';
    }
  }

  passwordColorStrength(index: number) {
    if (this.password.length === 0) {
      return 'gray';
    } else if (this.password.length < 8) {
      return 'red';
    } else {
      if (index === 0 && this.passwordStrength === 'short') {
        return 'red';
      } else if ((index === 0 || index === 1) && this.passwordStrength === 'medium') {
        return 'yellow';
      } else if (index === 2 && this.passwordStrength === 'strong') {
        return 'green';
      } else {
        return 'gray';
      }
    }
  }
}

