import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { TaskService } from '../../services/task/task.service';
import { ProjectService } from '../../services/project/project.service';

@Directive({
  selector: '[appTableResize]',
})
export class TableResizeDirective {
  private table = null;
  private isMouseDown = false;
  private x = 0;
  private resizingColumnIndex = null;
  private resizingElem = null;
  private width = 0;
  private newWidth = 0;
  private taskConfig = null;
  private projectConfig = null;
  private tableWidth = 0;

  @Input() component = null;

  constructor(
    private el: ElementRef,
    private taskService: TaskService,
    private projectService: ProjectService
  ) {
    this.subscribeTaskConfigUpdate();
    this.subscribeProjectConfigUpdate();
  }

  subscribeTaskConfigUpdate() {
    this.taskService.currentTaskConfigStageMessage.subscribe((taskConfig) => {
      if (taskConfig && taskConfig.data) {
        this.taskConfig = taskConfig;
      }
    });
  }

  subscribeProjectConfigUpdate() {
    this.projectService.currentProjectConfigStageMessage.subscribe(
      (projectConfig) => {
        if (projectConfig && projectConfig.data) {
          this.projectConfig = projectConfig;
        }
      }
    );
  }

  mouseDownHandler(e) {
    this.isMouseDown = true;
    document.documentElement.classList.add('resizing');
    this.resizingElem = e.target.closest('th');

    this.width = this.resizingElem.getBoundingClientRect().width /*this.resizingElem.offsetWidth*/;

    this.resizingColumnIndex = [].slice
      .call(this.table.querySelectorAll('th'))
      .indexOf(this.resizingElem);

    this.x = e.clientX;
  }

  mouseUpHandler() {
    if (this.isMouseDown) {
      document.documentElement.classList.remove('resizing');
      this.isMouseDown = false;

      if (this.component === 'task') {
        const newTaskConfig = {
          ...this.taskConfig,
          data: {
            ...this.taskConfig.data,
            columns: this.taskConfig.data.columns.map((column, index) => {
              if (index === this.resizingColumnIndex - 1) {
                return {
                  ...column,
                  width: this.newWidth,
                };
              }

              return column;
            }),
          },
        };

        this.taskService.updateTaskConfigMessage(newTaskConfig);
      } else if (this.component === 'project') {
        const newProjectConfig = {
          ...this.projectConfig,
          data: {
            ...this.projectConfig.data,
            columns: this.projectConfig.data.columns.map((column, index) => {
              if (index === this.resizingColumnIndex - 1) {
                return {
                  ...column,
                  width: this.newWidth,
                };
              }

              return column;
            }),
          },
        };

        this.projectService.updateProjectConfigMessage(newProjectConfig);
      }
    }
  }

  mouseMoveHandler(e) {
    if (!this.isMouseDown) {
      return;
    }
    this.newWidth = this.width + e.clientX - this.x;
    if (this.newWidth < 48) {
      this.newWidth = 48;
    }
    this.resizingElem.style.width = this.newWidth + 'px';
  }

  @HostListener('mousedown', ['$event']) onMouseDown(e) {
    if (e.target.classList.contains('resize')) {
      this.mouseDownHandler(e);
    }
  }

  @HostListener('document:mousemove', ['$event']) onMouseMove(e) {
    this.mouseMoveHandler(e);
  }

  @HostListener('document:mouseup', ['$event']) onMouseUp(e) {
    this.mouseUpHandler();
  }

  ngOnInit(): void {
    this.table = this.el.nativeElement;
  }
}
