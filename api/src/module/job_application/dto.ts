import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import { ApiStringField } from '../../shared/decorator';
import { CandicateDto } from '../candicate/dto';
import { CvDto } from '../cv/dto';
import { JobDto } from '../jobs/dto';

export class JobApplicationBaseDto {
    @ApiProperty({ type: JobDto })
    job_id: JobDto;

    @ApiProperty({ type: CandicateDto })
    candidate_id: CandicateDto;

    @ApiProperty({ type: CvDto })
    cv_id: CvDto;

    @ApiStringField()
    description: string;

    @ApiStringField()
    status: string;
}

export class JobApplicationDto extends JobApplicationBaseDto {
    @ApiProperty({ example: 1 })
    @IsNumber()
    id: number;
}

export class JobApplicationCreateDto extends JobApplicationBaseDto {}

export class JobApplicationReplaceDto extends JobApplicationBaseDto {}
