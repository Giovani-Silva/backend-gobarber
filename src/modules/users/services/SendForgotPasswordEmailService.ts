import { injectable, inject } from 'tsyringe';
// import AppError from '@shared/errors/AppError';
import IUsersRepository from '../repositories/IUsersRepository';
// import IUserTokensRepository from '../repositories/IUserTokensRepository';

interface IRequest {
  email: string;
}

class SendForgotPasswordEmailService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({}: IRequest): Promise<void> {}
}

export default SendForgotPasswordEmailService;
