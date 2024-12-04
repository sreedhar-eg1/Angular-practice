import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatchErrorOperatorComponent } from './catch-error-operator.component';

describe('CatchErrorOperatorComponent', () => {
  let component: CatchErrorOperatorComponent;
  let fixture: ComponentFixture<CatchErrorOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatchErrorOperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatchErrorOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
