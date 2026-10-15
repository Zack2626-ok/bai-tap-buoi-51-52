import { Injectable } from "@nestjs/common";

@Injectable()
export class CvService {
    private cvs: any[] = []

    getList() {
        return [{
            id: 1,
            name: "toan"
        }];
    }

    getById(id: number) {
        return this.cvs
    }

    create(cv: any) {
        this.cvs.push(cv);
        return cv;
    }

    replace(cv: any) {
        return cv;
    }

    delete(id: number) {
        return { message: "delete success" }
    }
}