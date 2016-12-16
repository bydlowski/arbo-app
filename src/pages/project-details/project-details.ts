import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-project-details',
  templateUrl: 'project-details.html'
})
export class ProjectDetailsPage {

	titleText: any;
	subtitleText: any;
  today: any;

  constructor(public navCtrl: NavController, private navParams: NavParams) {
  	let string = this.navParams.get('myString');
  	let substring = this.navParams.get('mySubstring');
  	this.titleText = string;
  	this.subtitleText = substring;
    //let date = new Date();
    //this.today = date.getFullYear() + '/' + ('0' + (date.getMonth() + 1)).slice(-2) + '/' + ('0' + date.getDate()).slice(-2);
    //this.today = ('0' + date.getDate()).slice(-2) + '/' + ('0' + (date.getMonth() + 1)).slice(-2) + '/' + date.getFullYear();
    // this.today = new Date();

  }

  getDay(day) {
    let todayDate = new Date();
    let date = todayDate.setDate(todayDate.getDate() + 1);
    //this.today = date.getFullYear() + '/' + ('0' + (date.getMonth() + 1)).slice(-2) + '/' + ('0' + date.getDate()).slice(-2);
    //let today = ('0' + date.getDate()).slice(-2) + '/' + ('0' + (date.getMonth() + 1)).slice(-2) + '/' + date.getFullYear();
    return date;
  }

}
