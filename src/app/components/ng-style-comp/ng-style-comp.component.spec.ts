import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgStyleCompComponent } from './ng-style-comp.component';

describe('NgStyleCompComponent', () => {
  let component: NgStyleCompComponent;
  let fixture: ComponentFixture<NgStyleCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgStyleCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgStyleCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
