import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { JobService } from "./service";
import { JobCreateDto, JobDto, JobReplaceDto } from "./dto";
import { ApiResponse } from "@nestjs/swagger";


@Controller('jobs')
export class JobController {
    constructor(private jobService: JobService) { }


    @Get()
    @ApiResponse({
        status: 200,
        description: 'The records have been successfully retrieved.',
        type: JobDto,
        isArray: true
    })
    getJobs() {
        return this.jobService.getList();
    }


    @Get(':id')
    @ApiResponse({
        status: 200,
        description: 'The record has been successfully retrieved.',
        type: JobDto,
    })
    getJob(@Param('id') id: number) {
        return this.jobService.getById(id);
    }

    @Post()
    @ApiResponse({
        status: 201,
        description: 'The record has been successfully created.',
        type: JobDto,
    })
    createJob(@Body() job: JobCreateDto) {
        return this.jobService.create(job);
    }

    @Put(':id')
    @ApiResponse({
        status: 200,
        description: 'The record has been successfully updated.',
        type: JobDto,
    })
    replaceJob(@Param('id') id: number, @Body() job: JobReplaceDto) {
        return this.jobService.replace(job);
    }

    @Delete(':id')
    @ApiResponse({
        status: 200,
        description: 'The record has been successfully deleted.',
    })
    deleteJob(@Param('id') id: number) {
        return this.jobService.delete(id);
    }
}