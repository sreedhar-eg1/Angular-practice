import { AbstractControl, AsyncValidatorFn } from "@angular/forms";
import { ReactiveActorService } from "./reactive-actor.service";
import { inject } from "@angular/core";
import { catchError, map, of } from "rxjs";

export function uniqueRoleValidator(actorService: ReactiveActorService): AsyncValidatorFn {
    return (control: AbstractControl) => {
        return actorService.isRoleTaken(control.value).pipe(
           map((isTaken) => (isTaken ? {uniqueRole: true} : null)),
           catchError(err => of(null))
        )
    }
}