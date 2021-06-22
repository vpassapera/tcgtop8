import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  @Input() currentPage: number = 0;
  @Input() totalPages: number = 0;
  @Output() pageChanged = new EventEmitter<number>();

  constructor() {
    // Noop
  }

  setPage(page: number) {
    this.currentPage = page;
    this.pageChanged.emit(this.currentPage);
  }

  ngOnInit() {
  }
}
