import { MailerService } from "@nestjs-modules/mailer";
import { Controller, Get } from "@nestjs/common";
import { ExampleService } from "./email.service";

@Controller('mail')
export class ExampleController {
    constructor(private readonly emailService: ExampleService) {}

    // curl http://localhost:3333/mail
    @Get()
    sendMail() {
        this.emailService.example();
    }
}

