import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewseltterComponent } from './newseltter.component';

describe('NewseltterComponent', () => {
  let component: NewseltterComponent;
  let fixture: ComponentFixture<NewseltterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewseltterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewseltterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
