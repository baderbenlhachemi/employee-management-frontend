export class Company {
  id: number;
  name: string;
  email: string;
  address: string;
  phone: string;
  website: string;
  description: string;

  constructor(id: number, name: string, email: string, address: string, phone: string, website: string, description: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.address = address;
    this.phone = phone;
    this.website = website;
    this.description = description;
  }

}
