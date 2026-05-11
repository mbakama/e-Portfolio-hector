import { Component, input } from '@angular/core';
import type { I18nText } from '../../types';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
})
export class Contact {
  readonly text = input.required<I18nText>();
}
