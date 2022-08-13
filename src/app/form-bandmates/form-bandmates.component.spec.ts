import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBandmatesComponent } from './form-bandmates.component';

describe('FormBandmatesComponent', () => {
  let component: FormBandmatesComponent;
  let fixture: ComponentFixture<FormBandmatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBandmatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormBandmatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
