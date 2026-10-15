import { Injectable } from "@nestjs/common";

@Injectable()
export class JobApplicationService {
    private jobApplications: any[] = []

    getList() {
        return [{
            id: 1,
            name: "toan"
        }];
    }

    getById(id: number) {
        return this.jobApplications
    }

    create(jobApplication: any) {
        this.jobApplications.push(jobApplication);
        return jobApplication;
    }

    replace(jobApplication: any) {
        return jobApplication;
    }

    delete(id: number) {
        return { message: "delete success" }
    }
}
