import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UkHomeComponent } from './uk-home.component';

describe('UkHomeComponent', () => {
  let component: UkHomeComponent;
  let fixture: ComponentFixture<UkHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UkHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UkHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
