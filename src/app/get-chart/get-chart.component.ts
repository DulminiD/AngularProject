import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-chart',
  templateUrl: './get-chart.component.html',
  styleUrls: ['./get-chart.component.css']
})
export class GetChartComponent implements OnInit {
  public next = true;
  constructor() { }
  ngOnInit(): void{
  }
  onClick(): void {
    console.log('okay');
    this.next = !this.next;
  }
}
