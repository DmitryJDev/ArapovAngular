import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnTradingArticleOneComponent } from './en-trading-article-one.component';

describe('EnTradingArticleOneComponent', () => {
  let component: EnTradingArticleOneComponent;
  let fixture: ComponentFixture<EnTradingArticleOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnTradingArticleOneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnTradingArticleOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
