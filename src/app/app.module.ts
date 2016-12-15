import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
// import { AboutPage } from '../pages/about/about';
// import { ContactPage } from '../pages/contact/contact';
// import { HomePage } from '../pages/home/home';
import { ProjectsPage } from '../pages/projects/projects';
import { ChatPage } from '../pages/chat/chat';
import { CameraPage } from '../pages/camera/camera';
import { ListPage } from '../pages/list/list';
import { UserPage } from '../pages/user/user';
import { TabsPage } from '../pages/tabs/tabs';


@NgModule({
  declarations: [
    MyApp,
    ProjectsPage,
    ChatPage,
    CameraPage,
    ListPage,
    UserPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProjectsPage,
    ChatPage,
    CameraPage,
    ListPage,
    UserPage,
    TabsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
