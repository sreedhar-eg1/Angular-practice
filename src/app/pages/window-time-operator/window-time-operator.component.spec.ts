import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowTimeOperatorComponent } from './window-time-operator.component';

describe('WindowTimeOperatorComponent', () => {
  let component: WindowTimeOperatorComponent;
  let fixture: ComponentFixture<WindowTimeOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WindowTimeOperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WindowTimeOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
