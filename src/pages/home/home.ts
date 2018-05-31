import { Component, NgZone } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
declare var ApiAIPromises: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
answer;

  constructor(public navCtrl: NavController,public platform: Platform, public ngZone: NgZone) {
  	platform.ready().then(() => {

      ApiAIPromises.init({
        clientAccessToken: "26950d7a838f45e0b584e39ef33c7c47"
      })
      .then((result) =>  console.log(result))
        
    });
        
    
  }

   ask(question) {
    ApiAIPromises.requestText({
      query: question
    })
    .then(({result: {fulfillment: {speech}}}) => {
       this.ngZone.run(()=> {
         this.answer = speech;
       });
    })
  }

}
