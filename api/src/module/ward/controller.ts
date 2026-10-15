import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { WardService } from "./service";
import { WardDto } from "./dto";
import { ApiResponse } from "@nestjs/swagger";


@Controller('wards')
export class WardController {
    constructor(private wardService: WardService) { }


    @Get()
    @ApiResponse({
        status: 200,
        description: 'The records have been successfully retrieved.',
        type: WardDto,
        isArray: true
    })
    getWards() {
        return this.wardService.getList();
    }


    @Get(':id')
    @ApiResponse({
        status: 200,
        description: 'The record has been successfully retrieved.',
        type: WardDto,
    })
    getWard(@Param('id') id: number) {
        return this.wardService.getById(id);
    }



}