import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [ HomeComponent, DetailComponent ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }
