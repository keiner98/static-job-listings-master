import { Component, OnInit } from '@angular/core';
import { Jobs } from 'src/app/Domain/interfaces/jobs.interface';
import { DataJobs } from 'src/app/Infraestructure/data';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
})
export class JobsComponent implements OnInit {
  jobs: Jobs[] = DataJobs;
  selected: number | null = 1;
  filters: string[] = [];
  constructor() {}

  ngOnInit(): void {}
  addFilter(option: string) {
    if (!this.filters.includes(option)) {
      this.filters.push(option);
      this.filters = [...this.filters]
    }
  }
}
