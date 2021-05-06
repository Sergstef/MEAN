import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicCvPageComponent } from './public-cv-page.component';

describe('PublicCvPageComponent', () => {
  let component: PublicCvPageComponent;
  let fixture: ComponentFixture<PublicCvPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicCvPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicCvPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
