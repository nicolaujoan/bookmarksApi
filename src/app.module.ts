import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { AuthModule } from './auth/auth.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { EmailModule } from './email/email.module';


@Module({
  imports: [AuthModule, UserModule, BookmarkModule, MailerModule.forRoot({
    transport: {
      host: "smtp.gmail.com",
      port: "465",
      secure: true
    }, 
    defaults: {
      from: '"nest-modules" <modules@nestjs.com>',
    },
  }), EmailModule], 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// atmisbeklpswvaox