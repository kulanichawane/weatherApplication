import { Component } from '@angular/core';
import { NavController, Img } from 'ionic-angular';
import { Provider } from '../../providers/provider/provider';
import { SecondPage } from '../second/second';
import arr from '../../app/array'



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  name;
  temp;
  wind;
  des;
  icon;
  img;
  max_temp;
  min_temp;
  cdate = new Date();
  day = this.cdate.getDay;
  month = this.cdate.getMonth;
  arr = new Array();
  constructor(public navCtrl: NavController, private newsprovider: Provider) {

    this.name = arr[0];
    if (this.name == null) {
      this.name = 'johannesburg'

      this.newsprovider.getForcast('durban').then((infor: any) => {

        console.log(infor);
      });
      this.newsprovider.getWeather(this.name).then((data: any) => {

        console.log(data)
        console.log(arr)
        if (this.icon = "10d") {
          this.img = '../../assets/imgs/sun.png';
          console.log(this.img + "1");

        }
        else if (this.icon = "01d") {
          this.img = '../../assets/imgs/rain.png';
          console.log(this.img + "2");

        }




        this.name = data.name
        this.temp = data.main.temp
        this.des = data.weather.description
        this.icon = data.weather[0].icon



        this.temp = (this.temp - 273.15).toFixed() + "°c";
        console.log(this.name + this.temp + "null" + this.icon);


      })

    } else {


      this.newsprovider.getForcast(this.name).then((infor: any) => {

        console.log(infor);
        this.max_temp = infor.list[0].main.temp_max;


        this.max_temp = (this.max_temp - 273.15).toFixed() + "°c"


      });

      this.newsprovider.getWeather(this.name).then((data: any) => {

        console.log(data)
        console.log(arr)



        this.name = data.name
        this.temp = data.main.temp
        this.des = data.weather[0].description
        this.icon = data.weather[0].icon

        this.temp = (this.temp - 273.15).toFixed() + "°c" 
        console.log(this.name + this.temp +   'not null ' + "  " + this.icon + " " + this.max_temp);


        if (this.icon === "01d") {
          this.img = '../../assets/imgs/sun.png';
          // alert('01')
          console.log(this.img + "2");

        } else if (this.icon === "10d") {
          this.img = '../../assets/imgs/rain.png';
          // alert('10')
          console.log(this.img + "2");

        } else if (this.icon === "02d") {
          this.img = '../../assets/imgs/clouds.png';
          // alert('10')
          console.log(this.img + "4");
        } else if (this.icon === "50d") {
          this.img = '../../assets//imgs/misty.png';
          // alert('10')
          console.log(this.img + "5");
        } else if (this.icon === "04d") {
          this.img = '../../assets//imgs//broken clouds.PNG';
          // alert('10')
          console.log(this.img + "3");
        } else if (this.icon === "09d") {
          this.img = '../../assets/imgs/09d.png';
          // alert('10')
          console.log(this.img + "3");
        }

      })
    }


  }

  next() {
    this.navCtrl.push(SecondPage);
    ;

  }







}
