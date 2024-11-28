import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistinctUntilChangedOperatorComponent } from './distinct-until-changed-operator.component';

describe('DistinctUntilChangedOperatorComponent', () => {
  let component: DistinctUntilChangedOperatorComponent;
  let fixture: ComponentFixture<DistinctUntilChangedOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistinctUntilChangedOperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistinctUntilChangedOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
