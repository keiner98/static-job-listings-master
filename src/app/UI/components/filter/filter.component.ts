import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  @Input() filters: string[] = [];
  @Output() newFilters = new EventEmitter<string[]>();

  constructor() {}

  ngOnInit(): void {}

  remove(element: string) {
    this.newFilters.emit(this.filters.filter((elem) => elem !== element));
  }

  removeAll() {
    this.newFilters.emit([]);
  }
}
