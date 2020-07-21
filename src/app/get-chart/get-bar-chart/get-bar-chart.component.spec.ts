import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBarChartComponent } from './get-bar-chart.component';

describe('GetBarChartComponent', () => {
  let component: GetBarChartComponent;
  let fixture: ComponentFixture<GetBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
