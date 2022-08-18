import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowShowsComponent } from './show-shows.component';

describe('ShowShowsComponent', () => {
  let component: ShowShowsComponent;
  let fixture: ComponentFixture<ShowShowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowShowsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
