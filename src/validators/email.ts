import { FormControl } from '@angular/forms'

export class EmailValidator {
    static isValid (control: FormControl): any {
        const tester = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+).([a-zA-Z]{2,5}).([a-zA-Z]{0,2})$/
            .test(control.value);

        if (tester) {
            return null
        }

        return {"invalidEmail":true};
    }
}