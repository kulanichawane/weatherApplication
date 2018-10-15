import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import arr from '../../app/array'
import { HomePage } from '../home/home';

/**
 * Generated class for the SecondPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})
export class SecondPage {
  name;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondPage');
    if(arr.length==0){

    }else{
   
      console.log(arr);
      arr.splice(0,1);
      console.log(arr);
    }
  }
  
  next(){
    arr.push(this.name); 
    console.log(arr);
    this.navCtrl.push(HomePage);
  }
  nextd(){
    arr.push('durban'); 
    console.log(arr);
    this.navCtrl.push(HomePage);
  }
  nextj(){
    arr.push('johannesburg'); 
    console.log(arr);
    this.navCtrl.push(HomePage);
  }
  nextc(){
    arr.push('cape town'); 
    console.log(arr);
    this.navCtrl.push(HomePage);
  }

}


