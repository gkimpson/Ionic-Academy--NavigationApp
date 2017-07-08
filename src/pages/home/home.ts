import { SecondPage } from './../second/second';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToNext() {
    this.navCtrl.push(SecondPage, {name:'Gavin', age:35});
  }
}
