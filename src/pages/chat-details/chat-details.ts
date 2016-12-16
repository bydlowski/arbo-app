import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-chat-details',
  templateUrl: 'chat-details.html'
})
export class ChatDetailsPage {

	titleText: any;
	subtitleText: any;

  constructor(public navCtrl: NavController, private navParams: NavParams) {
  	let string = this.navParams.get('myString');
  	let substring = this.navParams.get('mySubstring');
  	this.titleText = string;
  	this.subtitleText = substring;
  }

}
