import { Component, input } from '@angular/core';
import type { TechGroup, I18nText } from '../../types';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
})
export class Skills {
  readonly text = input.required<I18nText>();
  readonly techGroups = input.required<TechGroup[]>();
}
