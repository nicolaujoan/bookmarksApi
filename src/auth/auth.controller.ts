import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {
        this.authService.test();
    }

    // curl -X POST http://localhost:3333/auth/signup
    @Post('signup')
    signup() {
        return 'i am signup';
    }

    // curl -X POST http://localhost:3333/auth/signin
    @Post('signin')
    signin() {
        return 'i am signin';
    }
}