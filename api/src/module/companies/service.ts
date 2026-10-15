import { Injectable } from "@nestjs/common";


@Injectable()
export class CompanyService {
    private company: any[] = []


    getList() {
        return [{
            id: 1,
            name: "Công ti TNHH ABC"
        }];
    }

    getById(id: number) {
        return this.company
    }


    create(company: any) {
        this.company.push(company);
        return company;
    }

    replace(company: any) {
        return company;
    }

    delete(id: number) {
        return { message: "delete success" }
    }
}