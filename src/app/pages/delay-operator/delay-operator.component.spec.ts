import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelayOperatorComponent } from './delay-operator.component';

describe('DelayOperatorComponent', () => {
  let component: DelayOperatorComponent;
  let fixture: ComponentFixture<DelayOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DelayOperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelayOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
