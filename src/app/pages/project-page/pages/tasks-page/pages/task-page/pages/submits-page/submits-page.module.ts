import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmitsPageComponent } from "./submits-page.component";
import { SubmitsPageRoutingModule } from "./submits-page-routing.module";
import { SubmitsModule } from "../../../../../../../../components/submits/submits.module";




@NgModule({
  declarations: [
    SubmitsPageComponent,


  ],
  imports: [
    CommonModule,
    //SubmitsModule,
    SubmitsPageRoutingModule,
    SubmitsModule,

    // AppModule,

  ],
  exports: [

    SubmitsPageComponent,



  ]
})
export class SubmitsPageModule { }
