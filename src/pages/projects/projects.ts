import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ProjectDetailsPage } from '../../pages/project-details/project-details';

@Component({
  selector: 'page-projects',
  templateUrl: 'projects.html'
})
export class ProjectsPage {

  constructor(public navCtrl: NavController) {}

  seeProject(string,substring) {
    this.navCtrl.push(ProjectDetailsPage, {
      myString: string,
      mySubstring: substring
  	});
  }

}
