import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastOperatorComponent } from './last-operator.component';

describe('LastOperatorComponent', () => {
  let component: LastOperatorComponent;
  let fixture: ComponentFixture<LastOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastOperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
