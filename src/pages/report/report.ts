import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-report',
  templateUrl: 'report.html'
})
export class ReportPage {
  test: String = "Antoine bonney";
  stateText: boolean = false;
  color: string = "#FF0000";

  constructor(public navCtrl: NavController) {

  }

  buttonClicked() {
    this.test = "Je suis un indien";
    this.color = "#9FFFB8";
  }

  setColor(event) {
    console.log(event);
  }

  colorTouchStart() {

  }

  colorTouchEnd() {

  }
}
