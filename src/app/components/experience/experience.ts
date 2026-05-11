import { Component, input } from '@angular/core';
import type { ExperienceItem, I18nText } from '../../types';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
})
export class Experience {
  readonly text = input.required<I18nText>();
  readonly experiences = input.required<ExperienceItem[]>();
}
