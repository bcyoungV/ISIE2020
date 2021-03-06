import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LsComponent } from './ls.component';

describe('LsComponent', () => {
  let component: LsComponent;
  let fixture: ComponentFixture<LsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
