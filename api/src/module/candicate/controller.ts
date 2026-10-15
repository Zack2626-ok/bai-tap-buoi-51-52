import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CandicateService } from "./service";
import { CandicateCreateDto, CandicateDto, CandicateReplaceDto } from "./dto";
import { ApiResponse } from "@nestjs/swagger";


@Controller('candicate')
export class CandicateController {
    constructor(private candicateServiece: CandicateService) { }


    @Get()
    @ApiResponse({
        status: 200,
        description: 'The records have been successfully retrieved.',
        type: CandicateDto,
        isArray: true
    })
    getCandicates() {
        return this.candicateServiece.getList();
    }


    @Get(':id')
    @ApiResponse({
        status: 200,
        description: 'The record has been successfully retrieved.',
        type: CandicateDto,
    })
    getCandicate(@Param('id') id: number) {
        return this.candicateServiece.getById(id);
    }

    @Post()
    @ApiResponse({
        status: 201,
        description: 'The record has been successfully created.',
        type: CandicateDto,
    })
    createCandicate(@Body() candicate: CandicateCreateDto) {
        return this.candicateServiece.create(candicate);
    }

    @Put(':id')
    @ApiResponse({
        status: 200,
        description: 'The record has been successfully updated.',
        type: CandicateDto,
    })
    replaceCandicate(@Param('id') id: number, @Body() candicate: CandicateReplaceDto) {
        return this.candicateServiece.replace(candicate);
    }

    @Delete(':id')
    @ApiResponse({
        status: 200,
        description: 'The record has been successfully deleted.',
    })
    deleteCandicate(@Param('id') id: number) {
        return this.candicateServiece.delete(id);
    }
}