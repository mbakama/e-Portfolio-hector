import { Component, input, output } from '@angular/core';
import type { Lang, NavLink, I18nText } from '../../types';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
})
export class Header {
  readonly text = input.required<I18nText>();
  readonly currentLang = input.required<Lang>();
  readonly navLinks = input.required<NavLink[]>();
  readonly langChange = output<Lang>();

  protected setLanguage(lang: Lang): void {
    this.langChange.emit(lang);
  }
}
