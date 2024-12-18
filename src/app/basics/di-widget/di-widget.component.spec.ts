import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiWidgetComponent } from './di-widget.component';

describe('DiWidgetComponent', () => {
  let component: DiWidgetComponent;
  let fixture: ComponentFixture<DiWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
