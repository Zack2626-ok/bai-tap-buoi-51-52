import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsInt } from 'class-validator';
import { ApiStringField } from '../../shared/decorator';
import { CandicateDto } from '../candicate/dto';

export class CvBaseDto {
    @ApiProperty({ type: CandicateDto })
    candidate_id: CandicateDto;

    @ApiStringField()
    title: string;

    @ApiStringField()
    file_name: string;

    @ApiStringField()
    file_key: string;

    @ApiProperty({
        example: '2026-10-15T07:00:00.000Z',
        type: String,
        format: 'date-time',
    })
    @IsDateString()
    created_at: string;
}

export class CvDto extends CvBaseDto {
    @ApiProperty({ example: 1, type: Number })
    @IsInt()
    id: number;
}

export class CvCreateDto extends CvBaseDto {}

export class CvReplaceDto extends CvBaseDto {}
