import { type Page } from '@playwright/test';
import { BasePage } from '../BasePage';
import { BasicInfoComponent } from '../components/afisha/user/event-creation/BasicInfoComponent';
import { PosterComponent } from '../components/afisha/user/event-creation/PosterComponent';
import { DescriptionComponent } from '../components/afisha/user/event-creation/DescriptionComponent';
import { EventContactsComponent } from '../components/afisha/user/event-creation/EventContactsComponent';
import { RegistratoinComponent } from '../components/afisha/user/event-creation/RegistrationComponent';
import { PriceComponent } from '../components/afisha/user/event-creation/PriceComponent';
import { SchedulesComponent } from '../components/afisha/user/event-creation/SchedulesComponent';
import { OrgContactsComponent } from '../components/afisha/user/event-creation/OrgContactsComponent';
import { MinAgeComponent } from '../components/afisha/user/event-creation/MinAgeComponent';

export class EventCreationPage extends BasePage {
  public readonly basicInfoComponent = new BasicInfoComponent(this.page.locator('form mat-card').first());
  public readonly posterComponent = new PosterComponent(this.page.locator('#imageFile'));
  public readonly descriptionComponent = new DescriptionComponent(this.page.locator('#description'));
  public readonly eventContactsComponent = new EventContactsComponent(this.page.locator('#eventContacts'));
  public readonly priceComponent = new PriceComponent(
    this.page.locator('#isFreeControl').locator('xpath=//ancestor::mat-card'),
  );
  public readonly minAgeComponent = new MinAgeComponent(this.page.locator('#ageMin'), this.page);
  public readonly schedulesComponent = new SchedulesComponent(this.page.locator('#schedules'), this.page);
  public readonly registrationComponent = new RegistratoinComponent(this.page.locator('#checkinRule'));
  public readonly orgContactsComponent = new OrgContactsComponent(
    this.page.locator('mat-card', {
      hasText: 'Возможно, модераторам понадобится связаться с вами',
    }),
  );
  public readonly publishButton = this.page.getByRole('button', { name: 'Отправить на модерацию' });

  constructor(page: Page) {
    super(page);
  }

  public override async open(): Promise<void> {
    await this.page.goto('personal/events/create');
  }

  public async selectAgeLimit(): Promise<void> {
    await this.minAgeComponent.minAgeSelect.click();
    await this.page.getByRole('option', { name: '18+' }).click();
  }
}
