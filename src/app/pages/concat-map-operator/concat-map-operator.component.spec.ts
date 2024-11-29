import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcatMapOperatorComponent } from './concat-map-operator.component';

describe('ConcatMapOperatorComponent', () => {
  let component: ConcatMapOperatorComponent;
  let fixture: ComponentFixture<ConcatMapOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConcatMapOperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcatMapOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
