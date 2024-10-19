import { Component } from '@angular/core';
import { ContactType } from 'src/app/model/contact';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent {
  ContactType = ContactType;
}
