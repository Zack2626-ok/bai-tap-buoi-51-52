import { Injectable } from "@nestjs/common";


@Injectable()
export class CandicateService {
    private candidates: any[] = []


    getList() {
        return [{
            id: 1,
            name: "toan"
        }];
    }

    getById(id: number) {
        return this.candidates.find((candidate) => candidate.id === id);
    }


    create(candidate: any) {
        this.candidates.push(candidate);
        return candidate;
    }

    replace(candidate: any) {
        return candidate;
    }

    delete(id: number) {
        return { message: "delete success" }
    }
}