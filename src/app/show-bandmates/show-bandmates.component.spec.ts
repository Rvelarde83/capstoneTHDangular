import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBandmatesComponent } from './show-bandmates.component';

describe('ShowBandmatesComponent', () => {
  let component: ShowBandmatesComponent;
  let fixture: ComponentFixture<ShowBandmatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowBandmatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowBandmatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
