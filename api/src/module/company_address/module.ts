import { Module } from "@nestjs/common";
import { CompanyAdressController } from "./controller";
import { CompanyAdressService } from "./service";


@Module({
    controllers: [CompanyAdressController],
    providers: [CompanyAdressService]
})

export class CompanyAdressModule { }
