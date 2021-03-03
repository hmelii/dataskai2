import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../../../services/authors/authors.service';
import { CheckboxInterface } from '../../../interfaces/checkbox/checkbox.interface';

@Component({
  selector: 'app-authors-filter',
  templateUrl: './authors-filter.component.html',
  styleUrls: ['./authors-filter.component.scss'],
})
export class AuthorsFilterComponent implements OnInit {
  isShow: boolean;
  authors: CheckboxInterface[];
  all: CheckboxInterface = {
    value: 'all',
    checked: false,
  };

  selectedAuthors: (string | number)[] = [];

  constructor(private authorsService: AuthorsService) {
    this.isShow = false;
  }

  ngOnInit(): void {
    this.authorsService.currentAuthorsStageMessage.subscribe(
      (authors: Array<string>) => {
        return (this.authors = authors.map((author) => ({
          value: author,
          checked: false,
        })));
      }
    );
  }

  handleClick() {
    this.isShow = !this.isShow;
  }

  handleClickedOutside($event: Event) {
    console.log(this.authors);

    if (this.isShow) {
      this.isShow = false;
    }
  }

  handleChange($event: boolean, currentAuthor?: CheckboxInterface) {
    if (!currentAuthor) {
      if ($event === true) {
        this.all.checked = true;
        this.authors = this.authors.map((author) => ({
          ...author,
          checked: true,
        }));
        this.selectedAuthors = this.authors.map(
          (author: CheckboxInterface) => author.value
        );
      } else {
        this.all.checked = false;
        this.authors = this.authors.map((author) => ({
          ...author,
          checked: false,
        }));
        this.selectedAuthors = [];
      }
    } else {
      const findedSelectedAuthorIndex = this.selectedAuthors.findIndex(
        (author) => author === currentAuthor.value
      );
      if ($event === true) {
        if (findedSelectedAuthorIndex < 0) {
          this.selectedAuthors.push(currentAuthor.value);
        }
        currentAuthor.checked = true;
      } else {
        this.all.checked = false;
        this.selectedAuthors.splice(findedSelectedAuthorIndex, 1);
        currentAuthor.checked = false;
      }

      if (this.authors.length === this.selectedAuthors.length) {
        this.all.checked = true;
      }
    }
  }
}
