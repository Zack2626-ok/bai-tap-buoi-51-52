import { Controller, Get, Param } from "@nestjs/common";
import { ProvinceService } from "./service";
import { ProvinceDto } from "./dto";
import { ApiResponse } from "@nestjs/swagger";


@Controller('provinces')
export class ProvinceController {
    constructor(private provinceService: ProvinceService) { }


    @Get()
    @ApiResponse({
        status: 200,
        description: 'The records have been successfully retrieved.',
        type: ProvinceDto,
        isArray: true
    })
    getProvinces() {
        return this.provinceService.getList();
    }


    @Get(':id')
    @ApiResponse({
        status: 200,
        description: 'The record has been successfully retrieved.',
        type: ProvinceDto,
    })
    getProvince(@Param('id') id: number) {
        return this.provinceService.getById(id);
    }
}