import { ErrorHandler } from '@angular/core';

export class AppErrorHandler extends ErrorHandler {
    handleError(error) {
        alert('an unexpected error occured');
        console.log(error);
    }
}
