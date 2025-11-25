import { BaseComponent } from '../../../../base/BaseComponent';

export type MinAge = '0+' | '6+' | '12+' | '16+' | '18+';

export class MinAgeComponent extends BaseComponent {
  public readonly minAgeSelect = this.root.getByLabel(/Возрастное ограничение/);
  public readonly minAgeList = this.getPage().getByRole('listbox', { name: /Возрастное ограничение/ });
  public readonly minAgeListOptions = this.minAgeList.getByRole('option');

  public async selectMinAge(ageValue: MinAge): Promise<void> {
    await this.minAgeSelect.click();
    await this.minAgeListOptions.filter({ hasText: ageValue }).click();
  }
}
