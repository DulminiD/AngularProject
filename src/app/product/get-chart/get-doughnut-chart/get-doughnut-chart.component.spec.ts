import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDoughnutChartComponent } from './get-doughnut-chart.component';

describe('GetDoughnutChartComponent', () => {
  let component: GetDoughnutChartComponent;
  let fixture: ComponentFixture<GetDoughnutChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetDoughnutChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetDoughnutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
