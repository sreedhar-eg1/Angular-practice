import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToArrayOperatorComponent } from './to-array-operator.component';

describe('ToArrayOperatorComponent', () => {
  let component: ToArrayOperatorComponent;
  let fixture: ComponentFixture<ToArrayOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToArrayOperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToArrayOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
