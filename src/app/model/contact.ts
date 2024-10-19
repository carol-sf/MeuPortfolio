export class Contact {
  info: String;
  iconClass: String;
  link: String;

  constructor(contactType: ContactType) {
    this.info = this.getInfo(contactType);
    this.iconClass = this.getIconClass(contactType);
    this.link = this.getLink(contactType);
  }

  getInfo(contactType: ContactType): String {
    switch(contactType) {
      case ContactType.linkedin: return "https://linkedin.com/in/carol-sf";
      case ContactType.github: return "https://github.com/carol-sf";
      case ContactType.gmail: return "annacarolina.franca21@gmail.com";
      case ContactType.phone: return "(22) 99793-3879";
    }
  }

  getIconClass(contactType: ContactType): String {
    switch(contactType) {
      case ContactType.linkedin: return "mdi-linkedin";
      case ContactType.github: return "mdi-github";
      case ContactType.gmail: return "mdi-gmail";
      case ContactType.phone: return "mdi-phone";
    }
  }

  getLink(contactType: ContactType): String {
    switch(contactType) {
      case ContactType.linkedin: return "https://linkedin.com/in/carol-sf";
      case ContactType.github: return "https://github.com/carol-sf";
      case ContactType.gmail: return "";
      case ContactType.phone: return "";
    }
  }
}

export enum ContactType {
  linkedin,
  github,
  gmail,
  phone,
}
