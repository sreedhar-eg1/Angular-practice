import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhaustAllOperatorComponent } from './exhaust-all-operator.component';

describe('ExhaustAllOperatorComponent', () => {
  let component: ExhaustAllOperatorComponent;
  let fixture: ComponentFixture<ExhaustAllOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExhaustAllOperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExhaustAllOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
