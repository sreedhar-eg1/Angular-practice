import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGroceryitemComponent } from './edit-groceryitem.component';

describe('EditGroceryitemComponent', () => {
  let component: EditGroceryitemComponent;
  let fixture: ComponentFixture<EditGroceryitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditGroceryitemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditGroceryitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
