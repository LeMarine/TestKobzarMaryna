import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {PASSWORD_STRENGTH} from "./shared/enums/password.enums";
import {PasswordService} from "./shared/services/password.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  passwordStrength: PASSWORD_STRENGTH = PASSWORD_STRENGTH.EMPTY;

  form!: FormGroup

  constructor(private readonly passwordService: PasswordService) { }

  ngOnInit() {
    this.initForm();

    this.subscribeOnChanges();
  }

  initForm() {
    this.form = new FormGroup({
      password: new FormControl('')
    });
  }

  subscribeOnChanges() {
    this.form.valueChanges.subscribe(value => {
      this.passwordStrength = this.passwordService.checkStrengthPassword(value.password)
    })
  }
}

