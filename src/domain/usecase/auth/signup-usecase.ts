import { IUserDTO } from 'domain/entities/interface/user-dto'

export class SignUpUseCase {
  constructor(private authRepository: any) { }

  async execute ( user: IUserDTO ): Promise<any> {
    const requiredFields = ['name', 'phonenumber']
    for (const element of requiredFields) {
      if (!user[element]) {
        return {
          status: 400,
          body: `${element[0].toUpperCase() + element.slice(1)} is empty`
        }
      }
    }
    return 1
  }
}