import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { CounterButtonComponent } from './counter-button/counter-button.component';
import { CounterCustomInputComponent } from './counter-custom-input/counter-custom-input.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/state/counter.reducer';

const routes: Routes = [{ path: '', component: CounterComponent }];

@NgModule({
  declarations: [
    CounterComponent,
    CounterOutputComponent,
    CounterButtonComponent,
    CounterCustomInputComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes), StoreModule.forFeature('counter', counterReducer)],
// exports: [RouterModule],
})
export class CounterModule {}
