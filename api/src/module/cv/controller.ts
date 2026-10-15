import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CvService } from "./service";
import { CvCreateDto, CvDto, CvReplaceDto } from "./dto";
import { ApiResponse } from "@nestjs/swagger";


@Controller('cv')
export class CvController {
    constructor(private cvServiece: CvService) { }


    @Get()
    @ApiResponse({
        status: 200,
        description: 'The records have been successfully retrieved.',
        type: CvDto,
        isArray: true
    })
    getCvs() {
        return this.cvServiece.getList();
    }


    @Get(':id')
    @ApiResponse({
        status: 200,
        description: 'The record has been successfully retrieved.',
        type: CvDto,
    })
    getCv(@Param('id') id: number) {
        return this.cvServiece.getById(id);
    }

    @Post()
    @ApiResponse({
        status: 201,
        description: 'The record has been successfully created.',
        type: CvDto,
    })
    createCv(@Body() cv: CvCreateDto) {
        return this.cvServiece.create(cv);
    }

    @Put(':id')
    @ApiResponse({
        status: 200,
        description: 'The record has been successfully updated.',
        type: CvDto,
    })
    replaceCv(@Param('id') id: number, @Body() cv: CvReplaceDto) {
        return this.cvServiece.replace(cv);
    }

    @Delete(':id')
    @ApiResponse({
        status: 200,
        description: 'The record has been successfully deleted.',
    })
    deleteCv(@Param('id') id: number) {
        return this.cvServiece.delete(id);
    }
}