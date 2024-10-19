import { Contact, ContactType } from 'src/app/model/contact';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.scss']
})
export class ContactItemComponent {
  @Input() contactType: ContactType = ContactType.linkedin;
  contact: Contact = new Contact(this.contactType);

  ngOnInit() {
    this.contact = new Contact(this.contactType);
  }
}
