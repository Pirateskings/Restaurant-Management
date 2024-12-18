import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalarycalculationComponent } from './salarycalculation.component';

describe('SalarycalculationComponent', () => {
  let component: SalarycalculationComponent;
  let fixture: ComponentFixture<SalarycalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalarycalculationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalarycalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
