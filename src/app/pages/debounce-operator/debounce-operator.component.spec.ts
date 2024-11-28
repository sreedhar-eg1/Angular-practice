import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebounceOperatorComponent } from './debounce-operator.component';

describe('DebounceOperatorComponent', () => {
  let component: DebounceOperatorComponent;
  let fixture: ComponentFixture<DebounceOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebounceOperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebounceOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
