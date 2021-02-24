import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmitsPageComponent } from "./submits-page.component";
import { SubmitsPageRoutingModule } from "./submits-page-routing.module";
import { ProjectPageModule } from "../../../../../../project-page.module";




@NgModule({
  declarations: [
    SubmitsPageComponent,


  ],
  imports: [
    CommonModule,
    //SubmitsModule,
    SubmitsPageRoutingModule,
    ProjectPageModule,
    // SubmitsModule,

    // AppModule,

  ],
  exports: [

    SubmitsPageComponent,



  ]
})
export class SubmitsPageModule { }
