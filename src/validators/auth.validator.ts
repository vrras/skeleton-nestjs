import { IsNotEmpty } from 'class-validator';

export class AuthValidator {
    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    password: string;
}