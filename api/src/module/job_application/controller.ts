import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ApiResponse } from "@nestjs/swagger";
import {
    JobApplicationCreateDto, JobApplicationDto, JobApplicationReplaceDto,
} from "./dto";
import { JobApplicationService } from "./service";

@Controller('jobApplication')
export class JobApplicationController {
    constructor(private jobApplicationService: JobApplicationService) { }

    @Get()
    @ApiResponse({
        status: 200,
        description: 'The records have been successfully retrieved.',
        type: JobApplicationDto,
        isArray: true
    })
    getJobApplications() {
        return this.jobApplicationService.getList();
    }

    @Get(':id')
    @ApiResponse({
        status: 200,
        description: 'The record has been successfully retrieved.',
        type: JobApplicationDto,
    })
    getJobApplication(@Param('id') id: number) {
        return this.jobApplicationService.getById(id);
    }

    @Post()
    @ApiResponse({
        status: 201,
        description: 'The record has been successfully created.',
        type: JobApplicationDto,
    })
    createJobApplication(@Body() jobApplication: JobApplicationCreateDto) {
        return this.jobApplicationService.create(jobApplication);
    }

    @Put(':id')
    @ApiResponse({
        status: 200,
        description: 'The record has been successfully updated.',
        type: JobApplicationDto,
    })
    replaceJobApplication(
        @Param('id') id: number,
        @Body() jobApplication: JobApplicationReplaceDto,
    ) {
        return this.jobApplicationService.replace(jobApplication);
    }

    @Delete(':id')
    @ApiResponse({
        status: 200,
        description: 'The record has been successfully deleted.',
    })
    deleteJobApplication(@Param('id') id: number) {
        return this.jobApplicationService.delete(id);
    }
}
