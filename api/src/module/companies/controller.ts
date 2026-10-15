import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CompanyService } from "./service";
import { CompanyCreateDto, CompanyDto, CompanyReplaceDto } from "./dto";
import { ApiResponse } from "@nestjs/swagger";


@Controller('companies')
export class CompanyController {
    constructor(private companyService: CompanyService) { }


    @Get()
    @ApiResponse({
        status: 201,
        description: 'All record has been successfully created.',
        type: CompanyDto,
        isArray: true
    })
    getCategories() {
        return this.companyService.getList();
    }


    @Get(':id')
    @ApiResponse({
        status: 200,
        description: 'The record has been successfully retrieved.',
        type: CompanyDto,
    })
    getCompany(@Param('id') id: number) {
        return this.companyService.getById(id);
    }

    @Post()
    @ApiResponse({
        status: 201,
        description: 'The record has been successfully created.',
        type: CompanyDto,
    })
    createCompany(@Body() company: CompanyCreateDto) {
        console.log(company);
        return this.companyService.create(company);
    }

    @Put(':id')
    @ApiResponse({
        status: 200,
        description: 'The record has been successfully updated.',
        type: CompanyDto,
    })
    replaceCompany(@Param('id') id: number, @Body() company: CompanyReplaceDto) {

        return this.companyService.replace(company);
    }


    @Delete(':id')
    @ApiResponse({
        status: 200,
        description: 'The record has been successfully deleted.',
        type: CompanyDto,
    })
    deleteCompany(@Param('id') id: number) {
        return this.companyService.delete(id);
    }

}