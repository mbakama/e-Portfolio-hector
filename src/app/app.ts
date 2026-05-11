import { Component } from '@angular/core';
import { type Lang } from './types';
import { i18n } from './data/i18n';
import { projectsByLang } from './data/projects';
import { experiencesByLang } from './data/experience';
import { techGroupsByLang } from './data/tech-groups';
import { openSourceReposByLang } from './data/open-source';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Experience } from './components/experience/experience';
import { OpenSource } from './components/open-source/open-source';
import { Contact } from './components/contact/contact';

@Component({
  selector: 'app-root',
  imports: [Header, Hero, Skills, Projects, Experience, OpenSource, Contact],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly languageStorageKey = 'portfolio-language';
  protected currentLang: Lang = 'fr';

  constructor() {
    const savedLang = localStorage.getItem(this.languageStorageKey);
    if (savedLang === 'fr' || savedLang === 'en') {
      this.currentLang = savedLang;
    }
  }

  protected setLanguage(lang: Lang): void {
    this.currentLang = lang;
    localStorage.setItem(this.languageStorageKey, lang);
  }

  protected get text() {
    return i18n[this.currentLang];
  }

  protected get navLinks() {
    return this.text.navLinks;
  }

  protected get techGroups() {
    return techGroupsByLang[this.currentLang];
  }

  protected get projects() {
    return projectsByLang[this.currentLang];
  }

  protected get experiences() {
    return experiencesByLang[this.currentLang];
  }

  protected get openSourceRepos() {
    return openSourceReposByLang[this.currentLang];
  }
}
