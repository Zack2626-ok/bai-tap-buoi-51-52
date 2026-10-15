import { Module } from "@nestjs/common";
import { WardController } from "./controller";
import { WardService } from "./service";


@Module({
    controllers: [WardController],
    providers: [WardService]
})

export class WardModule { }
