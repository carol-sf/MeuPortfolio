import { Component } from '@angular/core';
import { ProjectsData } from 'src/app/data/projects';

@Component({
  selector: 'app-project-bizu-app',
  templateUrl: './project-bizu-app.component.html',
  styleUrls: ['./project-bizu-app.component.scss']
})
export class ProjectBizuAppComponent {
  project: Project = ProjectsData.appBizu;
}
