import { IUserCreateDTO } from '../../../domain/entities/interface/user-dto'
import { SignUpUseCase } from './signup-usecase'

const makeSut = (): any => {
  const dto: IUserCreateDTO = {
    name: 'John',
    phonenumber: 'Smith',
    password: 'validPassword'
  }
  const sut = new SignUpUseCase(null)

  return {
    dto, sut
  }
}

describe('SignUp UseCase', () => {
  it('should return 400 if no name is provided', async () => {
    const { dto, sut } = makeSut()
    dto.name = ''

    const result = await sut.execute(dto)

    expect(result.status).toBe(400)
    expect(result.body).toBe('Name is empty')
  })
})