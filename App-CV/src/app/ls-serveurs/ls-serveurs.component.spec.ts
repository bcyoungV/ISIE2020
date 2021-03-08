import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LsServeursComponent } from './ls-serveurs.component';

describe('LsServeursComponent', () => {
  let component: LsServeursComponent;
  let fixture: ComponentFixture<LsServeursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LsServeursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LsServeursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
