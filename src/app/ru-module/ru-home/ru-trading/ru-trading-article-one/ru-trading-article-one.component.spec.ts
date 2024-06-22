import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuTradingArticleOneComponent } from './ru-trading-article-one.component';

describe('RuTradingArticleOneComponent', () => {
  let component: RuTradingArticleOneComponent;
  let fixture: ComponentFixture<RuTradingArticleOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RuTradingArticleOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RuTradingArticleOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
