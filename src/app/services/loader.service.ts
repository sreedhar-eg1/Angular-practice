import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  loadingAction$ = this.loadingSubject.asObservable();

  constructor(private zone: NgZone) {}

  showLoader() {
    this.zone.run(() => {
      this.loadingSubject.next(true);
    });
  }

  hideLoader() {
    this.zone.run(() => {
      this.loadingSubject.next(false);
    });
  }
}
