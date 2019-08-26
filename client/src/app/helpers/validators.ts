import {AbstractControl} from '@angular/forms';

export default {
  authSymbols() {
    return (control: AbstractControl): { [key: string]: any } => {
      const input = control.value;
      if (!input || (input && input.match(/^[a-z0-9A-Z@\-_.]{1,}$/))) {
        return null;
      } else {
        return {'authSymbols': true};
      }
    };
  }
};
