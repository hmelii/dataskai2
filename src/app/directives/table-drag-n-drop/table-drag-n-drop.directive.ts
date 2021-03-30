import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { TaskService } from '../../services/task/task.service';
import { ProjectService } from '../../services/project/project.service';

@Directive({
  selector: '[appTableDragNDrop]',
})
export class TableDragNDropDirective {
  table = null;
  list = null;
  isDraggingStarted = false;
  draggingEle;
  placeholder;
  draggingColumnIndex;
  isMouseDown = false;
  taskConfig = null;
  projectConfig = null;

  @Input() component;

  x = 0;
  y = 0;

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

  // Swap two nodes
  swap(nodeA, nodeB) {
    const parentA = nodeA.parentNode;
    const siblingA = nodeA.nextSibling === nodeB ? nodeA : nodeA.nextSibling;

    // Move `nodeA` to before the `nodeB`
    nodeB.parentNode.insertBefore(nodeA, nodeB);

    // Move `nodeB` to before the sibling of `nodeA`
    parentA.insertBefore(nodeB, siblingA);
  }

  // Check if `nodeA` is on the left of `nodeB`
  isOnLeft(nodeA, nodeB) {
    // Get the bounding rectangle of nodes
    const rectA = nodeA.getBoundingClientRect();
    const rectB = nodeB.getBoundingClientRect();

    return rectA.left + rectA.width / 2 < rectB.left + rectB.width / 2;
  }

  mouseDownHandler(e) {
    this.draggingColumnIndex = [].slice
      .call(this.table.querySelectorAll('th'))
      .indexOf(e.target);

    // Determine the mouse position
    this.x = e.clientX - e.target.offsetLeft;
    this.y = e.clientY - e.target.offsetTop;
    this.isMouseDown = true;

    // Attach the listeners to `document`
    // const mouseMoveHandler = this.mouseMoveHandler.bind(this);
    // const mouseUpHandler = this.mouseUpHandler.bind(this);
    // document.addEventListener('mousemove', mouseMoveHandler);
    // document.addEventListener('mouseup', mouseUpHandler);
  }

  cloneTable() {
    const rect = this.table.getBoundingClientRect();

    this.list = document.createElement('div');
    this.list.classList.add('clone-list');
    this.list.style.position = 'absolute';
    this.list.style.left = `${rect.left}px`;
    this.list.style.top = `${rect.top}px`;

    this.table.parentNode.insertBefore(this.list, this.table);

    // Hide the original table
    this.table.style.visibility = 'hidden';

    // Get all cells
    const originalCells = [].slice.call(this.table.querySelectorAll('td'));

    const originalHeaderCells = [].slice.call(
      this.table.querySelectorAll('th')
    );
    const numColumns = originalHeaderCells.length;

    // Loop through the header cells
    originalHeaderCells.forEach((headerCell, headerIndex) => {
      const width = parseInt(window.getComputedStyle(headerCell).width);

      // Create a new table from given row
      const item = document.createElement('div');
      item.classList.add('draggable');

      const newTable = document.createElement('table');
      newTable.setAttribute('class', 'clone-table');
      newTable.style.width = `${width}px`;

      // Header
      const th = headerCell.cloneNode(true);
      let newRow = document.createElement('tr');
      newRow.appendChild(th);
      newTable.appendChild(newRow);

      const cells = originalCells.filter((c, idx) => {
        return (idx - headerIndex) % numColumns === 0;
      });
      cells.forEach((cell) => {
        const newCell = cell.cloneNode(true);
        newCell.style.width = `${width}px`;
        newRow = document.createElement('tr');
        newRow.appendChild(newCell);
        newTable.appendChild(newRow);
      });

      item.appendChild(newTable);
      this.list.appendChild(item);
    });
  }

  mouseMoveHandler(e) {
    if (!this.isMouseDown) {
      return;
    }

    if (!this.isDraggingStarted) {
      this.isDraggingStarted = true;
      this.cloneTable();

      this.draggingEle = [].slice.call(this.list.children)[
        this.draggingColumnIndex
      ];
      this.draggingEle.classList.add('dragging');

      // Let the placeholder take the height of dragging element
      // So the next element won't move to the left or right
      // to fill the dragging element space
      this.placeholder = document.createElement('div');
      this.placeholder.classList.add('placeholder');
      this.draggingEle.parentNode.insertBefore(
        this.placeholder,
        this.draggingEle.nextSibling
      );
      this.placeholder.style.width = `${this.draggingEle.offsetWidth}px`;
    }

    // Set position for dragging element
    this.draggingEle.style.position = 'absolute';
    this.draggingEle.style.top = `${
      /*this.draggingEle.offsetTop +*/ e.clientY - this.y
    }px`;
    this.draggingEle.style.left = `${
      this.draggingEle.offsetLeft + e.clientX - this.x
    }px`;

    // Reassign the position of mouse
    this.x = e.clientX;
    this.y = e.clientY;

    // The current order
    // prevEle
    // draggingEle
    // placeholder
    // nextEle
    const prevEle = this.draggingEle.previousElementSibling;
    const nextEle = this.placeholder.nextElementSibling;

    // // The dragging element is above the previous element
    // // User moves the dragging element to the left
    if (prevEle && this.isOnLeft(this.draggingEle, prevEle)) {
      // The current order    -> The new order
      // prevEle              -> placeholder
      // draggingEle          -> draggingEle
      // placeholder          -> prevEle
      this.swap(this.placeholder, this.draggingEle);
      this.swap(this.placeholder, prevEle);
      return;
    }

    // The dragging element is below the next element
    // User moves the dragging element to the bottom
    if (nextEle && this.isOnLeft(nextEle, this.draggingEle)) {
      // The current order    -> The new order
      // draggingEle          -> nextEle
      // placeholder          -> placeholder
      // nextEle              -> draggingEle
      this.swap(nextEle, this.placeholder);
      this.swap(nextEle, this.draggingEle);
    }
  }

  mouseUpHandler() {
    if (!this.isMouseDown) {
      return;
    }

    this.isMouseDown = false;

    // // Remove the placeholder
    this.placeholder &&
      this.placeholder.parentNode.removeChild(this.placeholder);

    this.draggingEle.classList.remove('dragging');
    this.draggingEle.style.removeProperty('top');
    this.draggingEle.style.removeProperty('left');
    this.draggingEle.style.removeProperty('position');

    // Get the end index
    const endColumnIndex = [].slice
      .call(this.list.children)
      .indexOf(this.draggingEle);

    this.updateTaskConfig(endColumnIndex);

    this.isDraggingStarted = false;

    // Remove the `list` element
    this.list.parentNode.removeChild(this.list);

    // Move the dragged column to `endColumnIndex`
    this.table.querySelectorAll('tr').forEach((row) => {
      const cells = [].slice.call(row.querySelectorAll('th, td'));
      this.draggingColumnIndex > endColumnIndex
        ? cells[endColumnIndex].parentNode.insertBefore(
            cells[this.draggingColumnIndex],
            cells[endColumnIndex]
          )
        : cells[endColumnIndex].parentNode.insertBefore(
            cells[this.draggingColumnIndex],
            cells[endColumnIndex].nextSibling
          );
    });

    // Bring back the table
    this.table.style.removeProperty('visibility');
  }

  ngOnInit() {
    this.table = this.el.nativeElement;
  }

  @HostListener('document:mousemove', ['$event']) onMouseMove(e) {
    this.mouseMoveHandler(e);
  }

  @HostListener('document:mouseup') onMouseUp() {
    this.mouseUpHandler();
  }

  @HostListener('mousedown', ['$event']) onMouseDown(e) {
    if (e.target.classList.contains('drag-n-drop')) {
      this.mouseDownHandler(e);
    }
  }

  private updateTaskConfig(endColumnIndex: any) {
    if (this.component === 'task') {
      const newTaskConfig = {
        ...this.taskConfig,
        data: {
          ...this.taskConfig.data,
          columns: this.taskConfig.data.columns.map((column, index) => {
            if (index === this.draggingColumnIndex - 1) {
              return {
                ...column,
                index: endColumnIndex - 1,
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
            if (index === this.draggingColumnIndex - 1) {
              return {
                ...column,
                index: endColumnIndex - 1,
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
