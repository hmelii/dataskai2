import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appTableDragNDrop]',
})
export class TableDragNDropDirective implements OnInit {
  table = null;
  list = null;
  isDraggingStarted = false;
  draggingEle;
  draggingColumnIndex;
  observer;

  constructor(private el: ElementRef) {}

  mouseDownHandler(th) {
    // Attach the listeners to `document`
    document.addEventListener('mousemove', this.mouseMoveHandler);
    document.addEventListener('mouseup', this.mouseUpHandler);

    // Get the index of dragging column
    this.draggingColumnIndex = [].slice
      .call(this.table.querySelectorAll('[appThDragNDrop]'))
      .indexOf(th.target);
  }

  mouseMoveHandler(e) {
    if (!this.isDraggingStarted) {
      this.isDraggingStarted = true;

      this.cloneTable();

      // Query the dragging element
      this.draggingEle = [].slice.call(this.list.children)[
        this.draggingColumnIndex
      ];
    }
  }

  mouseUpHandler() {
    // Remove the handlers of `mousemove` and `mouseup`
    document.removeEventListener('mousemove', this.mouseMoveHandler);
    document.removeEventListener('mouseup', this.mouseUpHandler);

    // Get the end index
    const endColumnIndex = [].slice
      .call(this.list.children)
      .indexOf(this.draggingEle);

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
  }

  cloneTable() {
    // Get the bounding rectangle of table
    const rect = this.table.getBoundingClientRect();

    // Create new element
    this.list = document.createElement('div');

    // Set the same position as table
    this.list.style.position = 'absolute';
    this.list.style.left = `${rect.left}px`;
    this.list.style.top = `${rect.top}px`;

    // Insert it before the table
    this.table.parentNode.insertBefore(this.list, this.table);

    // Hide the table
    this.table.style.visibility = 'hidden';

    const originalCells = [].slice.call(
      this.table.querySelectorAll('tbody td')
    );

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

      // Header
      const th = headerCell.cloneNode(true);
      let newRow = document.createElement('tr');
      newRow.appendChild(th);
      newTable.appendChild(newRow);

      const cells = originalCells.filter((c, idx) => {
        return (idx - headerIndex) % numColumns === 0;
      });

      newTable.style.width = `${width}px`;

      cells.forEach(function (cell) {
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

  ngOnInit() {
    this.table = this.el.nativeElement;

    // Query all header cells
    this.table.querySelectorAll('thead th').forEach((headerCell) => {
      // Attach event handler
      headerCell.addEventListener('mousedown', this.mouseDownHandler);
    });

    this.observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        console.log(mutation.type);
      });
    });
    var config = { attributes: true, childList: true, characterData: true };

    this.observer.observe(this.table, config);
  }

  /* @HostListener('mousedown', ['$event.target']) onMouseDown(target) {
    const th = target.closest('[appThDragNDrop]');
    if (th) {
      this.mouseDownHandler(th);
    }
  }*/
}
