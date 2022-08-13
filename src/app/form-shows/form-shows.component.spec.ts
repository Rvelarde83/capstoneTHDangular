import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormShowsComponent } from './form-shows.component';

describe('FormShowsComponent', () => {
  let component: FormShowsComponent;
  let fixture: ComponentFixture<FormShowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormShowsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
