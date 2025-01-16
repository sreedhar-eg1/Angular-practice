import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

export interface IcanDeactivate {
  canDeactivate(): boolean
}

@Component({
  selector: 'app-user-profile',
  imports: [FormsModule, RouterLink],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent implements IcanDeactivate {
  username = signal<string>('Sample text')
  dirty = signal(false)

  onChange(event: Event) {
    this.dirty.set(true)
  }

  canDeactivate(): boolean {
      return !this.dirty()
  }
}
