import { Component, input } from '@angular/core';
import type { Repo, I18nText } from '../../types';

@Component({
  selector: 'app-open-source',
  imports: [],
  templateUrl: './open-source.html',
})
export class OpenSource {
  readonly text = input.required<I18nText>();
  readonly repos = input.required<Repo[]>();
}
