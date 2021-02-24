import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoPageComponent } from "./info-page.component";
import { InfoPageRoutingModule } from "./info-page-routing.module";
import { ProjectPageModule } from "../../../../../../project-page.module";
import { AppModule } from "../../../../../../../../app.module";
// import { SubmitsModule } from "../../../../../../../../components/submits/submits.module";




@NgModule({
  declarations: [
    InfoPageComponent,


  ],
  imports: [
    CommonModule,
    //SubmitsModule,
    InfoPageRoutingModule,
    ProjectPageModule,
    // SubmitsModule,

    // AppModule,

  ],
  exports: [

    InfoPageComponent,



  ]
})
export class InfoPageModule { }
