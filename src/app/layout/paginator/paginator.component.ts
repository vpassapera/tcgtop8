import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
  @Input() currentPage: number = 0;
  @Input() totalPages: number = 0;
  @Input() maxDelta: number = null;
  @Input() ellipsis: boolean = false;
  @Output() pageChanged = new EventEmitter<number>();
  public pageRange: any[] = [];

  constructor() {}

  setPage(page: number) {
    this.currentPage = page;
    this.pageChanged.emit(this.currentPage);
    this.pageRange = this.getRange();
  }

  ngOnInit() {
    this.pageRange = this.getRange();
  }

  private getRange(): string[] {
    const vanillaRange: any[] = Array.from(Array(this.totalPages).keys());

    if (!this.ellipsis) {
      return vanillaRange;
    }

    const center = [this.currentPage - 2, this.currentPage - 1, this.currentPage, this.currentPage + 1, this.currentPage + 2];
    const filteredCenter: any[] = center.filter((p) => p > 1 && p < this.totalPages);
    const includeThreeLeft = this.currentPage === 5;
    const includeThreeRight = this.currentPage === this.totalPages - 4;
    const includeLeftDots = this.currentPage > 5;
    const includeRightDots = this.currentPage < this.totalPages - 4;
    if (includeThreeLeft) { filteredCenter.unshift(2); }
    if (includeThreeRight) { filteredCenter.push(this.totalPages - 1); }
    if (includeLeftDots) { filteredCenter.unshift('...'); }
    if (includeRightDots) { filteredCenter.push('...'); }

    return [1, ...filteredCenter, this.totalPages];
  }
}
