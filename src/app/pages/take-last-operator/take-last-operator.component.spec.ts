import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeLastOperatorComponent } from './take-last-operator.component';

describe('TakeLastOperatorComponent', () => {
  let component: TakeLastOperatorComponent;
  let fixture: ComponentFixture<TakeLastOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TakeLastOperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TakeLastOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
