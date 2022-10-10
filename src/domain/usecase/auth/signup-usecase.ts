import { IUserDTO } from 'domain/entities/interface/user-dto'

export class SignUpUseCase {
  constructor(private authRepository: any) { }

  async execute ( user: IUserDTO ): Promise<any> {
    if (!user.name) {
      return {
        status: 400,
        body: 'Name is empty'
      }
    }
    return 1
  }
}