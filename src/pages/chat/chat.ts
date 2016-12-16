import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ChatDetailsPage } from '../../pages/chat-details/chat-details';

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {

  constructor(public navCtrl: NavController) {}

  seeProject(string,substring) {
    this.navCtrl.push(ChatDetailsPage, {
      myString: string,
      mySubstring: substring
  	});
  }

}
