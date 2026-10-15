import { Module } from "@nestjs/common";
import { JobController } from "./controller";
import { JobService } from "./service";


@Module({
    controllers: [JobController],
    providers: [JobService]
})

export class JobModule { }
