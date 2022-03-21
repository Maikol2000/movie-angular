import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToheadingComponent } from './toheading.component';

describe('ToheadingComponent', () => {
  let component: ToheadingComponent;
  let fixture: ComponentFixture<ToheadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToheadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToheadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
