import { Pipe, PipeTransform } from '@angular/core';
import { Jobs } from 'src/app/Domain/interfaces/jobs.interface';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(jobs: Jobs[], filters: string[]): Jobs[] {
    if (!jobs || jobs.length === 0 || !filters || filters.length === 0) {
      return jobs;
    }

    return jobs.filter(job => {
      // Verifica si todas las categorías en filters están presentes en el trabajo actual
      return filters.every(filter => {
        return (
          job.tools.includes(filter) ||
          job.languages.includes(filter) ||
          job.level === filter ||
          job.role === filter
        );
      });
    });
  }
}
