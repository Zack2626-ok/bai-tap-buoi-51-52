import { Injectable } from "@nestjs/common";


@Injectable()
export class JobService {
    private job: any[] = []


    getList() {
        return [{
            id: 1,
            name: "toan"
        }];
    }

    getById(id: number) {
        return this.job
    }


    create(job: any) {
        this.job.push(job);
        return job;
    }

    replace(job: any) {
        return job;
    }

    delete(id: number) {
        return { message: "delete success" }
    }
}