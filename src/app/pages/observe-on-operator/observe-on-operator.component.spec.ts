import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObserveOnOperatorComponent } from './observe-on-operator.component';

describe('ObserveOnOperatorComponent', () => {
  let component: ObserveOnOperatorComponent;
  let fixture: ComponentFixture<ObserveOnOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObserveOnOperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObserveOnOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
