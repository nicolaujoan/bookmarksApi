import { ConsoleLogger, Injectable } from '@nestjs/common';
import { transporter } from './mailer';


@Injectable()
export class ExampleService {
  constructor() {}

  public async example(){
    
    try {
        await transporter.sendMail({
            from: '"vacaciones control presencia 👻" <joannicolau23@gmail.com>', // sender address
            to: "jnicolau@intricom.es, joannicolau23@gmail.com", // list of receivers
            subject: "Hello, vacaciones!!! ✔", // Subject line
            text: "Fulano de tal se va de vacaciones por pascua hasta verano", // plain text body
            // html: "<b>Hello world, nos fuimos, texto en html</b>", // html body
        });
    }

    catch (error) {
        console.log(error);
    }
  }
}