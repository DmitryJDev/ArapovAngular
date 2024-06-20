import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuHomeComponent } from './ru-home.component';

describe('RuHomeComponent', () => {
  let component: RuHomeComponent;
  let fixture: ComponentFixture<RuHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RuHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RuHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
