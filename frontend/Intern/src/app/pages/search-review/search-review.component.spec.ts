import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchReviewComponent } from './search-review.component';

describe('SearchReviewComponent', () => {
  let component: SearchReviewComponent;
  let fixture: ComponentFixture<SearchReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchReviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
