import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetryWhenOperatorComponent } from './retry-when-operator.component';

describe('RetryWhenOperatorComponent', () => {
  let component: RetryWhenOperatorComponent;
  let fixture: ComponentFixture<RetryWhenOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetryWhenOperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetryWhenOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
