import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../../services/task/task.service';
import { LangService } from '../../../services/lang/lang.service';
import { LangInterface } from '../../../interfaces/langs/lang.interface';
import { ProjectDescriptionEnum } from '../../../enums/project/project.enum';

@Component({
  selector: 'app-task-info',
  templateUrl: './task-info.component.html',
  styleUrls: ['./task-info.component.scss'],
})
export class TaskInfoComponent implements OnInit {
  infos: Array<any>;
  currentLang: LangInterface;
  projectDescriptionHeading: string;

  constructor(
    private taskInfoService: TaskService,
    private langService: LangService
  ) {
    langService.currentLangStageMessage.subscribe((lang: LangInterface) => {
      this.projectDescriptionHeading = ProjectDescriptionEnum[lang.id];
      return (this.currentLang = lang);
    });
  }

  ngOnInit(): void {
    this.taskInfoService.currentTaskInfoStageMessage.subscribe((infos) => {
      console.log(infos);
      return (this.infos = infos);
    });
  }
}
