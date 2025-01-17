import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  imports: [ReactiveFormsModule],
  templateUrl: './name-editor.component.html',
  styleUrl: './name-editor.component.scss',
})
export class NameEditorComponent {
  private formBuilder = inject(FormBuilder)

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('')
    }),
    aliases: new FormArray([
      new FormGroup({
        alias: new FormControl('', Validators.required),
      }),
    ])
  });

  // profileForm = this.formBuilder.group({
  //   firstName: ['', Validators.required],
  //   lastName: [''],
  //   address: this.formBuilder.group({
  //     street: [''],
  //     city: [''],
  //     state: [''],
  //     zip: ['']
  //   }),
  //   aliases: this.formBuilder.array([new FormControl('')])
  // })

  get aliases(): FormArray {
    return this.profileForm.get('aliases') as FormArray
  }

  onAddAliases() {
    this.aliases.push(
      new FormGroup({
        alias: new FormControl('', Validators.required),
      })
    );
  }

  onSubmit() {
    console.log(this.profileForm)
  }
}
