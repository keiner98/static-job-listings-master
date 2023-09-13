import { Component, OnInit } from '@angular/core';
import { Jobs } from 'src/app/Domain/interfaces/jobs.interface';
import { JobsService } from 'src/app/Infraestructure/services/jobs.service';
// import  DataJobs  from 'src/app/Infraestructure/';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
})
export class JobsComponent implements OnInit {
  jobs: Jobs[] = [];
  selected: number | null = 1;
  filters: string[] = [];
  constructor(private dataJobs: JobsService) {}

  ngOnInit(): void {
    this.getJobs();
  }
  addFilter(option: string) {
    if (!this.filters.includes(option)) {
      this.filters.push(option);
      this.filters = [...this.filters];
    }
  }

  getJobs() {
    this.dataJobs.getJobs().subscribe((jobs) => {
      this.jobs = jobs;
    });
  }
}
