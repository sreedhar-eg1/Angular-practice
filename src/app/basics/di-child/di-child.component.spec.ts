import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiChildComponent } from './di-child.component';

describe('DiChildComponent', () => {
  let component: DiChildComponent;
  let fixture: ComponentFixture<DiChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
