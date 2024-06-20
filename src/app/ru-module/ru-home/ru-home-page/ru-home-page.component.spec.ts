import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuHomePageComponent } from './ru-home-page.component';

describe('RuHomePageComponent', () => {
  let component: RuHomePageComponent;
  let fixture: ComponentFixture<RuHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RuHomePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RuHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
