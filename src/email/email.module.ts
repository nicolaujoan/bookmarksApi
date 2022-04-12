import { Module } from "@nestjs/common";
import { ExampleController } from "./email.controller";
import { ExampleService } from "./email.service"

@Module({
    controllers: [ExampleController],
    providers: [ExampleService],
})

export class EmailModule {}