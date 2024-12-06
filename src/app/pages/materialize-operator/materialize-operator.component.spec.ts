import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterializeOperatorComponent } from './materialize-operator.component';

describe('MaterializeOperatorComponent', () => {
  let component: MaterializeOperatorComponent;
  let fixture: ComponentFixture<MaterializeOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterializeOperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterializeOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
