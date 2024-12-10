import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltPostComponent } from './alt-post.component';

describe('AltPostComponent', () => {
  let component: AltPostComponent;
  let fixture: ComponentFixture<AltPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AltPostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AltPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
