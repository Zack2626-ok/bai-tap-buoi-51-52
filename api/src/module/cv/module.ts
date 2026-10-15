import { Module } from "@nestjs/common";
import { CvController } from "./controller";
import { CvService } from "./service";


@Module({
    controllers: [CvController],
    providers: [CvService]
})

export class CvModule { }
