import { Component } from '@angular/core';
import { FormControl, FormRecord, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-record',
  imports: [ReactiveFormsModule],
  templateUrl: './form-record.component.html',
  styleUrl: './form-record.component.scss'
})
export class FormRecordComponent {
 addresses = new FormRecord<FormControl<string | null>>({})

 getAddresses() {
  return Object.keys(this.addresses.controls)
 }

 addAddress() {
  const name = prompt("Enter name for the new address")
  if (name) {
    this.addresses.addControl(name, new FormControl(null))
  }
 }
}
