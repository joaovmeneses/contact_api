export class Contact {
  id?: string
  name: string
  lastName: string
  phonenumber: string

  constructor(
    name: string,
    lastName: string,
    phonenumber: string,
    id?: string
  ) {
    this.name = name
    this.lastName = lastName
    this.phonenumber = phonenumber
    this.id = id ?? id
  }
}
