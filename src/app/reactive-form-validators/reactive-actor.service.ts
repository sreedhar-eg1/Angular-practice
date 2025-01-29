import { Injectable, signal } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReactiveActorService {
  roles = signal(['hero', 'villan'])

  constructor() { }

  isRoleTaken(role: string) {
    return of(this.roles().includes(role)).pipe(delay(1000))
  }
}
