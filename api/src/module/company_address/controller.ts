import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CompanyAdressService } from "./service";
import { CompanyAdressCreateDto, CompanyAdressDto, CompanyAdressReplaceDto } from "./dto";
import { ApiResponse } from "@nestjs/swagger";


@Controller('companyAddress')
export class CompanyAdressController {
    constructor(private companyAdressService: CompanyAdressService) { }


    @Get()
    @ApiResponse({
        status: 201,
        description: 'All record has been successfully created.',
        type: CompanyAdressDto,
        isArray: true
    })
    getCategories() {
        return this.companyAdressService.getList();
    }


    @Get(':id')
    @ApiResponse({
        status: 200,
        description: 'The record has been successfully retrieved.',
        type: CompanyAdressDto,
    })
    getCompanyAdress(@Param('id') id: number) {
        return this.companyAdressService.getById(id);
    }

    @Post()
    @ApiResponse({
        status: 201,
        description: 'The record has been successfully created.',
        type: CompanyAdressDto,
    })
    createCompanyAdress(@Body() companyAdress: CompanyAdressCreateDto) {
        console.log(companyAdress);
        return this.companyAdressService.create(companyAdress);
    }

    @Put(':id')
    @ApiResponse({
        status: 200,
        description: 'The record has been successfully updated.',
        type: CompanyAdressDto,
    })
    replaceCompanyAdress(@Param('id') id: number, @Body() companyAdress: CompanyAdressReplaceDto) {

        return this.companyAdressService.replace(companyAdress);
    }


    @Delete(':id')
    @ApiResponse({
        status: 200,
        description: 'The record has been successfully deleted.',
        type: CompanyAdressDto,
    })
    deleteCompanyAdress(@Param('id') id: number) {
        return this.companyAdressService.delete(id);
    }

}