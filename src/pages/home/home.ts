import { ThirdPage } from './../third/third';
import { SecondPage } from './../second/second';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tab1: any;
  tab2: any;

  constructor(public navCtrl: NavController) {
    this.tab1 = SecondPage;
    this.tab2 = ThirdPage;
  }

  goToNext() {
    this.navCtrl.push(SecondPage, {name:'Gavin', age:35});
  }
}
