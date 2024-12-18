import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectionWidgetComponent } from './injection-widget.component';

describe('InjectionWidgetComponent', () => {
  let component: InjectionWidgetComponent;
  let fixture: ComponentFixture<InjectionWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InjectionWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InjectionWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
