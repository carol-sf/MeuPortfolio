import { Component } from '@angular/core';
import { ProjectsData } from './data/projects';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ProjectsData = ProjectsData;
}
