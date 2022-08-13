import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosDisplayComponent } from './photos-display.component';

describe('PhotosDisplayComponent', () => {
  let component: PhotosDisplayComponent;
  let fixture: ComponentFixture<PhotosDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotosDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotosDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
