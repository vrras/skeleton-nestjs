import { Injectable, NestMiddleware, HttpException } from '@nestjs/common';
import { responseError } from '../helpers/response.helper';
import { UserData } from '../dto/user-data.dto';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    async use(req: any, res: any, next: any) {
        const token: any = req.header('Authorization') || req.query.accessToken;

        if (!token) return responseError('Required Access Token', 401);

        next();
    }
}
