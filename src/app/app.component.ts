import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminProfileComponent } from "./basics/admin-profile/admin-profile.component";
import { UserProfileComponent } from "./basics/user-profile/user-profile.component";
import { NgComponentOutlet } from '@angular/common';
import { HostComponent } from "./basics/host/host.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AdminProfileComponent, UserProfileComponent, NgComponentOutlet, HostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-19-feature';

  isAdmin = signal(false)

  getComponent() {
    return this.isAdmin() ? AdminProfileComponent : UserProfileComponent
  }
}
