import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedularsComponent } from './schedulars.component';

describe('SchedularsComponent', () => {
  let component: SchedularsComponent;
  let fixture: ComponentFixture<SchedularsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchedularsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchedularsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
