import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealEstateEditPageComponent } from './real-estate-edit-page.component';

describe('RealEstateEditPageComponent', () => {
  let component: RealEstateEditPageComponent;
  let fixture: ComponentFixture<RealEstateEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealEstateEditPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealEstateEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
