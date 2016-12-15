import { Component } from '@angular/core';

import { ProjectsPage } from '../projects/projects';
import { ChatPage } from '../chat/chat';
import { CameraPage } from '../camera/camera';
import { ListPage } from '../list/list';
import { UserPage } from '../user/user';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = ProjectsPage;
  tab2Root: any = ChatPage;
  tab3Root: any = CameraPage;
  tab4Root: any = ListPage;
  tab5Root: any = UserPage;

  constructor() {

  }
}
