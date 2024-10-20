import { Component } from '@angular/core';
import { ProjectsData } from 'src/app/data/projects';

@Component({
  selector: 'app-project-web-police',
  templateUrl: './project-web-police.component.html',
  styleUrls: ['./project-web-police.component.scss']
})
export class ProjectWebPoliceComponent {
  project: Project = ProjectsData.policeWeb;
}
