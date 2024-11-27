import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorBasicsComponent } from './operator-basics.component';

describe('OperatorBasicsComponent', () => {
  let component: OperatorBasicsComponent;
  let fixture: ComponentFixture<OperatorBasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperatorBasicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperatorBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
