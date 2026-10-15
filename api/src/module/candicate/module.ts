import { Module } from "@nestjs/common";
import { CandicateController } from "./controller";
import { CandicateService } from "./service";


@Module({
    controllers: [CandicateController],
    providers: [CandicateService]
})

export class CandicateModule { }
