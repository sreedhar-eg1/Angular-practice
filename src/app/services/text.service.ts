import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextService {
  status = signal(false)

  constructor() { }
}
