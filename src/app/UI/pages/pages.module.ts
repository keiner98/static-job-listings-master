import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsComponent } from './jobs/jobs.component';
import { ComponentsModule } from '../components/components.module';
import { PipesModule } from 'src/app/Infraestructure/pipes/pipes.module';

@NgModule({
  declarations: [JobsComponent],
  exports: [JobsComponent],
  imports: [CommonModule, ComponentsModule, PipesModule],
})
export class PagesModule {}
