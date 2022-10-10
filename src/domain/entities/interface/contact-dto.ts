export interface IContactCreateDTO {
  name: string,
  lastName?: string,
  phonenumber: string
}

export interface IContactDTO {
  id: string,
  name: string,
  lastName?: string,
  phonenumber?: string
}

export interface IContactUpdateDTO {
  id: string
  name?: string,
  lastName?: string,
  phonenumber?: string
}