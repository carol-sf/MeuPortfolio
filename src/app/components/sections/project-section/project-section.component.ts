import { Component, Input } from '@angular/core';
import { ProjectsData } from 'src/app/data/projects';

@Component({
  selector: 'app-project-section',
  templateUrl: './project-section.component.html',
  styleUrls: ['./project-section.component.scss']
})
export class ProjectSectionComponent {
  @Input() project: Project = ProjectsData.appBizu;
  @Input() contentFirst: boolean = false;

  navigate(url: string) {
    window.open(url, '_blank');
  }
}
