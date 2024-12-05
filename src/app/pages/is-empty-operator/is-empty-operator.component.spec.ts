import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsEmptyOperatorComponent } from './is-empty-operator.component';

describe('IsEmptyOperatorComponent', () => {
  let component: IsEmptyOperatorComponent;
  let fixture: ComponentFixture<IsEmptyOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IsEmptyOperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IsEmptyOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
