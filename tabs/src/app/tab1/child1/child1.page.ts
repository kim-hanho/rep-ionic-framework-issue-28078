import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-child1',
  templateUrl: 'child1.page.html',
  styleUrls: ['child1.page.scss']
})
export class Child1Page {

  constructor(private router:Router) {}

  goPage2(){
    this.router.navigate(['/page2']);
  }

  ionViewDidEnter(){
    console.log('app-child1 ionViewDidEnter');
  }

  ionViewDidLeave(){
    console.log('app-child1 ionViewDidLeave');
  }

}
