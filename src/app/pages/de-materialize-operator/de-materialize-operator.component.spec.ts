import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeMaterializeOperatorComponent } from './de-materialize-operator.component';

describe('DeMaterializeOperatorComponent', () => {
  let component: DeMaterializeOperatorComponent;
  let fixture: ComponentFixture<DeMaterializeOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeMaterializeOperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeMaterializeOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
