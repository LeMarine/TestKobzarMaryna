import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {COLOR_STRENGTHS, PASSWORD_STRENGTH} from "../../enums/password.enums";

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordComponent),
      multi: true
    }
  ],
})
export class PasswordComponent implements ControlValueAccessor{
  password: string = '';
  @Input() passwordStrength!: PASSWORD_STRENGTH;

  onChange = (_:any) => {}
  onTouched = () => {}
  constructor() {}
  passwordColorStrength(index: number) {
    console.log('passwordColorStrength')
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
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: any): void {
    this.password = value;
  }
  setDisabledState(isDisabled: boolean): void {
  }
}
