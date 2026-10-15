import { Module } from "@nestjs/common";
import { JobApplicationController } from "./controller";
import { JobApplicationService } from "./service";

@Module({
    controllers: [JobApplicationController],
    providers: [JobApplicationService]
})
export class JobApplicationModule { }
