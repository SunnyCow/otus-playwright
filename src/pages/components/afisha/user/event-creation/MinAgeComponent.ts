import { BaseComponent } from '../../../../../base/BaseComponent';

export class MinAgeComponent extends BaseComponent {
  public readonly minAgeSelect = this.root.getByLabel(/Возрастное ограничение/);
}
