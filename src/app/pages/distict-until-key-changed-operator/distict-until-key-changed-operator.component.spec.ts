import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistictUntilKeyChangedOperatorComponent } from './distict-until-key-changed-operator.component';

describe('DistictUntilKeyChangedOperatorComponent', () => {
  let component: DistictUntilKeyChangedOperatorComponent;
  let fixture: ComponentFixture<DistictUntilKeyChangedOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistictUntilKeyChangedOperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistictUntilKeyChangedOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
