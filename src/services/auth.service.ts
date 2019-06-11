
import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { UserService } from '../services';

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService, private readonly userService: UserService,
    ) { }
    async validateUser(token: string): Promise<any> {
        // return await this.userService.findOneByToken(token);
      }

}
