import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPhotosComponent } from './form-photos.component';

describe('FormPhotosComponent', () => {
  let component: FormPhotosComponent;
  let fixture: ComponentFixture<FormPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPhotosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
