import { Injectable } from "@nestjs/common";


@Injectable()
export class CategoryService {
    private category: any[] = []


    getList() {
        return [{
            id: 1,
            name: "toan"
        }];
    }

    getById(id: number) {
        return this.category
    }


    create(category: any) {
        this.category.push(category);
        return category;
    }

    replace(category: any) {
        return category;
    }

    delete(id: number) {
        return { message: "delete success" }
    }
}