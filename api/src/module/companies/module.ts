import { Module } from "@nestjs/common";
import { CompanyController } from "./controller";
import { CompanyService } from "./service";


@Module({
    controllers: [CompanyController],
    providers: [CompanyService]
})

export class CompanyModule { }
