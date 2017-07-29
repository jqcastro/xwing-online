import { ErrorHandler, Injector } from '@angular/core';
import { NavigationService } from "app/shared/services/navigation.service";
import { NotFoundError } from "app/errors/not-found.error";

export class XwoErrorHandler extends ErrorHandler {
    constructor(
        private injector: Injector
    ) {
        super();
    }

    handleError(error) {
        // send the error to the server
        if (error instanceof NotFoundError || error.rejection instanceof NotFoundError) {
            const navigationService = this.injector.get(NavigationService);
            navigationService.goToNotFound();
            return;
        }

        // delegate to the default handler
        super.handleError(error);
    }
}