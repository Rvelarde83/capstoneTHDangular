import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandmatesDisplayComponent } from './bandmates-display.component';

describe('BandmatesDisplayComponent', () => {
  let component: BandmatesDisplayComponent;
  let fixture: ComponentFixture<BandmatesDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BandmatesDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BandmatesDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
