import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UkTraidingArticleOneComponent } from './uk-traiding-article-one.component';

describe('UkTraidingArticleOneComponent', () => {
  let component: UkTraidingArticleOneComponent;
  let fixture: ComponentFixture<UkTraidingArticleOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UkTraidingArticleOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UkTraidingArticleOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
