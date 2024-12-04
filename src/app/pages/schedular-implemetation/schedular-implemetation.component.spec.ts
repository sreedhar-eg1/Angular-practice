import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedularImplemetationComponent } from './schedular-implemetation.component';

describe('SchedularImplemetationComponent', () => {
  let component: SchedularImplemetationComponent;
  let fixture: ComponentFixture<SchedularImplemetationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchedularImplemetationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchedularImplemetationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
