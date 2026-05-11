import { Component, computed, input, signal } from '@angular/core';
import type { FeaturedProject, I18nText } from '../../types';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.html',
})
export class Projects {
  readonly text = input.required<I18nText>();
  readonly projects = input.required<FeaturedProject[]>();

  protected expandedIndex = signal<number | null>(null);

  protected professionalProjects = computed(() =>
    this.projects().filter((p) => p.type === 'professional'),
  );

  protected personalProjects = computed(() =>
    this.projects().filter((p) => p.type === 'personal'),
  );

  protected personalOffset = computed(() => this.professionalProjects().length);

  protected toggleDetails(index: number): void {
    this.expandedIndex.update((current) => (current === index ? null : index));
  }

  protected isExpanded(index: number): boolean {
    return this.expandedIndex() === index;
  }
}
