export class User {
  id?: string
  phonenumber: string
  password: string

  constructor (phonenumber: string, password: string, id?: string) {
    this.phonenumber = phonenumber
    this.password = password
    this.id = id ?? id
  }
}