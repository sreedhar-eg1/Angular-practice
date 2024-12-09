import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowWhenOperatorComponent } from './window-when-operator.component';

describe('WindowWhenOperatorComponent', () => {
  let component: WindowWhenOperatorComponent;
  let fixture: ComponentFixture<WindowWhenOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WindowWhenOperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WindowWhenOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
