import { FormControl } from "@angular/forms";

export const noSpaceAllowed = (control: FormControl) => {
    if (control.value != null && control.value.indexOf(' ') != -1) {
        return { noSpaceAllowed: true }
    }
    return null;
}

// async validator

function userNameAllowed(username: string) {
    const takenUserNames = ['ashish', 'roy'];

    return new Promise((reject, resolve) => {
        setTimeout(() => {
            if (takenUserNames.includes(username)) {
                resolve({ checkUsername: true });
            } else {
                resolve(null)
            }
        }, 5000)
    })
}