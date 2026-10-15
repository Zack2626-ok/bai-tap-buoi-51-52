import { Injectable } from "@nestjs/common";


@Injectable()
export class CompanyAdressService {
    private companyAdress: any[] = []


    getList() {
        return [{
            id: 1,
            name: "Công ti TNHH ABC"
        }];
    }

    getById(id: number) {
        return this.companyAdress
    }


    create(companyAdress: any) {
        this.companyAdress.push(companyAdress);
        return companyAdress;
    }

    replace(companyAdress: any) {
        return companyAdress;
    }

    delete(id: number) {
        return { message: "delete success" }
    }
}