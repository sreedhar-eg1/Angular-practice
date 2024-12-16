import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminProfileComponent } from './basics/admin-profile/admin-profile.component';
import { UserProfileComponent } from './basics/user-profile/user-profile.component';
import { AsyncPipe, NgComponentOutlet } from '@angular/common';
import { HostComponent } from './basics/host/host.component';
import { ParentComponent } from './basics/parent/parent.component';
import { StylesComponent } from './basics/styles/styles.component';
import { SizerComponent } from './basics/sizer/sizer.component';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    AdminProfileComponent,
    UserProfileComponent,
    NgComponentOutlet,
    HostComponent,
    ParentComponent,
    StylesComponent,
    SizerComponent,
    AsyncPipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'angular-19-feature';
  fontSize = signal(24);
  userRole = signal('admin');

  isAdmin = signal(true);
  profileComponent: {
    new (): UserProfileComponent | AdminProfileComponent;
  } | null = null;

  users = [
    {
      id: 1,
      name: 'user 1',
    },
    { id: 2, name: 'user 2' },
  ];

  num$ = from(this.users)!;

  getComponent() {
    return this.isAdmin() ? AdminProfileComponent : UserProfileComponent;
  }

  // With the help of lazy loading
  async getComponentUsingLazy() {
    if (this.isAdmin()) {
      const { AdminProfileComponent } = await import(
        './basics/admin-profile/admin-profile.component'
      );
      this.profileComponent = AdminProfileComponent;
    } else {
      const { UserProfileComponent } = await import(
        './basics/user-profile/user-profile.component'
      );
      this.profileComponent = UserProfileComponent;
    }
  }

  ngOnInit(): void {
    this.getComponentUsingLazy();
  }
}
