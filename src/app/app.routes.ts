import { Routes } from '@angular/router';
import { OperatorsComponent } from './pages/operators/operators.component';
import { BufferOperatorComponent } from './pages/buffer-operator/buffer-operator.component';
import { BufferCountOperatorComponent } from './pages/buffer-count-operator/buffer-count-operator.component';
import { BufferTimeOperatorComponent } from './pages/buffer-time-operator/buffer-time-operator.component';
import { BufferToggleComponent } from './pages/buffer-toggle/buffer-toggle.component';
import { BufferWhenComponent } from './pages/buffer-when/buffer-when.component';

export const routes: Routes = [
  { path: '', redirectTo: 'operator', pathMatch: 'full' },
  {
    path: 'operator',
    component: OperatorsComponent,
    children: [
      { path: 'buffer', component: BufferOperatorComponent },
      { path: 'buffercount', component: BufferCountOperatorComponent },
      { path: 'buffertime', component: BufferTimeOperatorComponent },
      { path: 'buffertoggle', component: BufferToggleComponent },
      { path: 'bufferwhen', component: BufferWhenComponent },
    ],
  },
];
