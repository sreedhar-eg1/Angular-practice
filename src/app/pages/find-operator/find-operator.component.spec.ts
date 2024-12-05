import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindOperatorComponent } from './find-operator.component';

describe('FindOperatorComponent', () => {
  let component: FindOperatorComponent;
  let fixture: ComponentFixture<FindOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindOperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
