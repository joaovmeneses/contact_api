import { IUserDTO } from '../../../domain/entities/interface/user-dto'

export class SignUpUseCase {
  constructor(private authRepository: any) { }

  async execute ( user: IUserDTO ): Promise<any> {
    const isVerified = await this.verifyRequiredFields(user)
    if(isVerified === true) {
      return {
        status: 200,
        body: 'SignUp Success'
      }
    } else {
      return {
        status: isVerified.status,
        body: isVerified.body
      }
    }

  }

  private async verifyRequiredFields(user: IUserDTO) {
    const requiredFields = ['name', 'phonenumber', 'password']
    for (const element of requiredFields) {
      if (!user[element]) {
        return {
          status: 400,
          body: `${element[0].toUpperCase() + element.slice(1)} is empty`
        }
      }
    }
    return true
  }
}