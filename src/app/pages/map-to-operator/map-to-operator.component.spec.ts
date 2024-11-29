import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapToOperatorComponent } from './map-to-operator.component';

describe('MapToOperatorComponent', () => {
  let component: MapToOperatorComponent;
  let fixture: ComponentFixture<MapToOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapToOperatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapToOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
