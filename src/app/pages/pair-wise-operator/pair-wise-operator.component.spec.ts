import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PairWiseOperatorComponent } from './pair-wise-operator.component';

describe('PairWiseOperatorComponent', () => {
  let component: PairWiseOperatorComponent;
  let fixture: ComponentFixture<PairWiseOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PairWiseOperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PairWiseOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
