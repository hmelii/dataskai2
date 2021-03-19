import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../services/project/project.service';

@Component({
  selector: 'app-project-name',
  templateUrl: './project-name.component.html',
  styleUrls: ['./project-name.component.scss'],
})
export class ProjectNameComponent implements OnInit {
  projectName = '';
  constructor(private projectService: ProjectService) {
    this.subscribeProjectConfigUpdate();
  }

  ngOnInit(): void {}
  subscribeProjectConfigUpdate() {
    this.projectService.currentProjectConfigStageMessage.subscribe(
      ({ data }) => {
        if (data && data.project_name) {
          this.projectName = data.project_name;
        }
      }
    );
  }
}
