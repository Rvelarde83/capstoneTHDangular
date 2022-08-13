import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsDisplayComponent } from './shows-display.component';

describe('ShowsDisplayComponent', () => {
  let component: ShowsDisplayComponent;
  let fixture: ComponentFixture<ShowsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowsDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
