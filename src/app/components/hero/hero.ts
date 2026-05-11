import { Component, input } from '@angular/core';
import type { I18nText } from '../../types';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
})
export class Hero {
  readonly text = input.required<I18nText>();
}
