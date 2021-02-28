import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../../../services/authors/authors.service';

@Component({
  selector: 'app-authors-filter',
  templateUrl: './authors-filter.component.html',
  styleUrls: ['./authors-filter.component.scss'],
})
export class AuthorsFilterComponent implements OnInit {
  isShow: boolean;
  authors: Array<any>;

  constructor(private authorsService: AuthorsService) {
    this.isShow = false;
  }

  ngOnInit(): void {
    this.authorsService.currentAuthorsStageMessage.subscribe((authors) => {
      console.log(authors);
      return (this.authors = authors);
    });
  }

  handleClick() {
    this.isShow = !this.isShow;
    console.log(this.isShow);
  }
}
