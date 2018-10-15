import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  modules: any = {
    module1: {
      colorValue: '#FFAA00',
      rgb: {
        r: 0,
        g: 0,
        b: 0
      },
      brightness: 50
    },
    module2: {
      colorValue: '#FFAA00',
      rgb: {
        r: 0,
        g: 0,
        b: 0
      },
      brightness: 50
    },
    module3: {
      colorValue: '#FF0000',
      rgb: {
        r: 0,
        g: 0,
        b: 0
      },
      brightness: 50
    },
    allmodules: {
      colorValue: '#FF0000',
      rgb: {
        r: 0,
        g: 0,
        b: 0
      },
      brightness: 50
    }
  };
  moduleSelected: string = 'module1';
  colorvalue: string = '#FF0000';
  r: number = 255;
  g: number = 0;
  b: number = 0;
  brightness: number = 50;

  constructor(public navCtrl: NavController) {
  }

  setColor(event) {
    this.modules[this.moduleSelected].colorValue = event;
    this.hexToRgb(event);
  }

  colorTouchStart() {

  }

  colorTouchEnd() {

  }

  hexToRgb(value: string) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(value);

    this.modules[this.moduleSelected].rgb.r = parseInt(result[1], 16);
    this.modules[this.moduleSelected].rgb.g = parseInt(result[2], 16);
    this.modules[this.moduleSelected].rgb.b = parseInt(result[3], 16);
  }

}
