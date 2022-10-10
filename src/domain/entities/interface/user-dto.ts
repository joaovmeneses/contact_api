export interface IUserCreateDTO {
  name: string,
  password: string,
  phonenumber: string,
}

export interface IUserDTO {
  name: string,
  password?: string,
  phonenumber: string,
}