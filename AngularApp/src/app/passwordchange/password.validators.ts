import { AbstractControl } from '@angular/forms';
import { promise } from 'protractor';

export class PasswordValidators {
 static wrongOldPassword(control: AbstractControl) {
     return new Promise((resolve) => {
          if (control.value !== '1234') {
         resolve({ wrongOldPassword: true });
          } else {
          resolve(null);
          }
 });
}
static passwordShouldMatch(control: AbstractControl) {
 const newPassword = control.get('newPassword');
 const confirmPassword = control.get('confirmPassword');
 if (newPassword.value !== confirmPassword.value) {
    return { passwordShouldMatch: true};
 } else {
     return null;
 }
}
}
