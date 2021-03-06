import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ProductService} from './product/shared/services/product.service';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { GetChartComponent } from './product/get-chart/get-chart.component';
import { ChartsModule } from 'ng2-charts';
import { GetDoughnutChartComponent } from './product/get-chart/get-doughnut-chart/get-doughnut-chart.component';
import { GetBarChartComponent } from './product/get-chart/get-bar-chart/get-bar-chart.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    GetChartComponent,
    GetDoughnutChartComponent,
    GetBarChartComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
