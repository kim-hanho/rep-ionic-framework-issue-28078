import { Component } from '@angular/core';
import {IonTabs} from "@ionic/angular";

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  private activeTab?: HTMLElement;

  constructor() {}

  // Workaround by liamdebeasi: https://github.com/ionic-team/ionic-framework/issues/16834#issuecomment-631676434
  tabChange(tabsRef: IonTabs) {
    this.activeTab = tabsRef.outlet.activatedView?.element;
  }

  // ionViewWillLeave() {
  //   this.propagateToActiveTab('ionViewWillLeave');
  // }

  ionViewDidLeave() {
    this.propagateToActiveTab('ionViewDidLeave');
  }

  // ionViewWillEnter() {
  //   this.propagateToActiveTab('ionViewWillEnter');
  // }

  ionViewDidEnter() {
    this.propagateToActiveTab('ionViewDidEnter');
  }

  private propagateToActiveTab(eventName: string) {
    if (this.activeTab) {
      this.activeTab.dispatchEvent(new CustomEvent(eventName));
    }
  }


}
