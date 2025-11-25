import { BaseComponent } from '../../../../base/BaseComponent';

export class PriceComponent extends BaseComponent {
  public readonly freeCheckbox = this.root.getByLabel('Бесплатно');
  public readonly priceFromInput = this.root.getByLabel('от');
  public readonly priceToInput = this.root.getByLabel('до');
  public readonly priceCommentInput = this.root.getByLabel('Комментарий');
}
