import {IonicModule} from '@ionic/angular';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Child1PageRoutingModule} from "./child1-routing.module";
import {Child1Page} from "./child1.page";


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Child1PageRoutingModule
  ],
  declarations: [Child1Page]
})
export class Child1PageModule {}
