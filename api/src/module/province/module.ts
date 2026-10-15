import { Module } from "@nestjs/common";
import { ProvinceController } from "./controller";
import { ProvinceService } from "./service";


@Module({
    controllers: [ProvinceController],
    providers: [ProvinceService]
})

export class ProvinceModule { }
