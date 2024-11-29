import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchMapOperatorComponent } from './switch-map-operator.component';

describe('SwitchMapOperatorComponent', () => {
  let component: SwitchMapOperatorComponent;
  let fixture: ComponentFixture<SwitchMapOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwitchMapOperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchMapOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
