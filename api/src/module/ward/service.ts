import { Injectable } from "@nestjs/common";


@Injectable()
export class WardService {
    private wards: any[] = []


    getList() {
        return [{
            id: 1,
            name: "toan"
        }];
    }

    getById(id: number) {
        return this.wards
    }


    create(ward: any) {
        this.wards.push(ward);
        return ward;
    }

    replace(ward: any) {
        return ward;
    }

    delete(id: number) {
        return { message: "delete success" }
    }
}