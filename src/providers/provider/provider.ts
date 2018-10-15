import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the Provider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/




@Injectable()
export class Provider {



  constructor(public http: HttpClient) {
    console.log('Hello Provider Provider');
  }
  
  getWeather(cityname){
    let API = 'http://api.openweathermap.org/data/2.5/weather?q='+ cityname + ',' +'southafrica&APPID=7fabf2d1ab43bc74376c02dfef03173d' ;

  return new Promise((resolve,reject)=>{
    this.http.get(API).subscribe(data=>{
      resolve(data);
    })
  });

  

 
  }
   
  getForcast(cityname){

    return  new Promise((reslove,reject)=>{

      let Api='http://api.openweathermap.org/data/2.5/forecast?q='+cityname+',' +'southafrica&APPID=7fabf2d1ab43bc74376c02dfef03173d';
      this.http.get(Api).subscribe(data =>{
        reslove(data);
      })
      
    })
  }
 
}
