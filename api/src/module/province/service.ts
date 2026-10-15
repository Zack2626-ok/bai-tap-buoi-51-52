import { Injectable } from "@nestjs/common";


@Injectable()
export class ProvinceService {
    private province: any[] = []


    getList() {
        return [{
            id: 1,
            name: "toan"
        }];
    }

    getById(id: number) {
        return this.province
    }


    create(province: any) {
        this.province.push(province);
        return province;
    }

    replace(province: any) {
        return province;
    }

    delete(id: number) {
        return { message: "delete success" }
    }
}