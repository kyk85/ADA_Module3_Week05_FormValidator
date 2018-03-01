import { FormControl } from '@angular/forms'

export class UsernameValidator {
    static isValid (control: FormControl): any {
        const tester = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/
            .test(control.value);

        if (tester) {
            return null
        }

        return {"invalidUsername":true};
    }
}