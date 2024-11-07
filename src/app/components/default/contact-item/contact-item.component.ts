import { Contact, ContactType } from 'src/app/model/contact';
import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrls: ['./contact-item.component.scss']
})
export class ContactItemComponent {
  @Input() contactType: ContactType = ContactType.linkedin;
  contact: Contact = new Contact(this.contactType);

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.contact = new Contact(this.contactType);
  }

  copyText() {
    navigator.clipboard.writeText(this.contact.info.toString()).then(() => {
      console.log('Texto copiado para a área de transferência!');
      this.showAlert();
    }).catch(err => {
      console.error('Erro ao copiar texto: ', err);
    });
  }

  showAlert() {
    this.snackBar.open('Texto copiado com sucesso!', 'x', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
