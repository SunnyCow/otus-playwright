import { type Page, type Locator } from '@playwright/test';
import { BasePage } from '../BasePage';
import { TitleSection } from '../fragments/afisha/user/event-creation/TitleSection';
import { PosterSection } from '../fragments/afisha/user/event-creation/PosterSection';
import { DescriptionSection } from '../fragments/afisha/user/event-creation/DescriptionSection';
import { EventContactsSection } from '../fragments/afisha/user/event-creation/EventContactsSection';
import { RegistrationSection } from '../fragments/afisha/user/event-creation/RegistrationSection';
import { PriceSection } from '../fragments/afisha/user/event-creation/PriceSection';
import { SchedulesSection } from '../fragments/afisha/user/event-creation/SchedulesSection';
import { OrgContactsSection } from '../fragments/afisha/user/event-creation/OrgContactsSection';

export class EventCreationPage extends BasePage {
  public readonly titleCard: Locator;
  public readonly posterCard: Locator;
  public readonly descriptionCard: Locator;
  public readonly contactsCard: Locator;
  public readonly priceCard: Locator;
  public readonly ageLimitSelect: Locator;
  public readonly schedulesCard: Locator;
  public readonly registrationCard: Locator;
  public readonly orgContactsCard: Locator;
  public readonly publishButton: Locator;
  public readonly titleSection: TitleSection;
  public readonly posterSection: PosterSection;
  public readonly descriptionSection: DescriptionSection;
  public readonly eventContactsSection: EventContactsSection;
  public readonly registrationSection: RegistrationSection;
  public readonly priceSection: PriceSection;
  public readonly schedulesSection: SchedulesSection;
  public readonly orgContactsSection: OrgContactsSection;

  constructor(page: Page) {
    super(page);
    this.titleCard = page.locator('form mat-card').first();
    this.posterCard = page.locator('#imageFile');
    this.descriptionCard = page.locator('#description');
    this.contactsCard = page.locator('#eventContacts');
    this.priceCard = page.locator('#isFreeControl').locator('xpath=//ancestor::mat-card');
    this.ageLimitSelect = page.getByLabel(/Возрастное ограничение/);
    this.schedulesCard = page.locator('#schedules');
    this.registrationCard = page.locator('#checkinRule');
    this.orgContactsCard = page.locator('mat-card', {
      hasText: 'Возможно, модераторам понадобится связаться с вами',
    });
    this.publishButton = page.getByRole('button', { name: 'Отправить на модерацию' });
    this.titleSection = new TitleSection(this.titleCard, page);
    this.posterSection = new PosterSection(this.posterCard);
    this.descriptionSection = new DescriptionSection(this.descriptionCard);
    this.registrationSection = new RegistrationSection(this.registrationCard);
    this.priceSection = new PriceSection(this.priceCard);
    this.schedulesSection = new SchedulesSection(this.schedulesCard, page);
    this.orgContactsSection = new OrgContactsSection(this.orgContactsCard);
    this.eventContactsSection = new EventContactsSection(this.contactsCard);
  }

  override async open(): Promise<void> {
    await this.page.goto('personal/events/create');
  }

  async selectAgeLimit(): Promise<void> {
    await this.ageLimitSelect.click();
    await this.page.getByRole('option', { name: '18+' }).click();
  }

  async fillAllRequiredFields(): Promise<void> {
    await this.titleSection.fillTitle();
    await this.titleSection.selectCategory();
    await this.posterSection.uploadPoster('test-data/images/valid.jpg');
    await this.descriptionSection.fillDescription();
    await this.selectAgeLimit();
    await this.schedulesSection.fillFirstSchedule();
    await this.orgContactsSection.fillOrgEmail();
  }
}
