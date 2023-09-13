import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter/filter.component';
import { CardsComponent } from './card/card.component';

@NgModule({
  declarations: [FilterComponent, CardsComponent],
  exports: [FilterComponent, CardsComponent],
  imports: [CommonModule],
})
export class ComponentsModule {}
