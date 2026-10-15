import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsInt, IsNotEmpty } from 'class-validator';
import { ApiStringField } from '../../shared/decorator';
import { CategoryDto } from '../category/dto';
import { CompanyDto } from '../companies/dto';

export class JobBaseDto {
    @ApiProperty({ type: CategoryDto })
    category_id: CategoryDto;

    @ApiProperty({ type: CompanyDto })
    company_id: CompanyDto;

    @ApiStringField()
    title: string;

    @ApiStringField()
    description: string;

    @ApiStringField()
    requirement: string;

    @ApiStringField()
    benefit: string;

    @ApiProperty({ example: 2, type: Number })
    @IsInt()
    @IsNotEmpty()
    experience: number;

    @ApiProperty({ example: '2026-12-31', type: String, })
    due_date: string;

    @ApiProperty({ example: 3, type: Number })
    @IsInt()
    @IsNotEmpty()
    quantity: number;

    @ApiProperty({ example: 15000000, type: Number })
    @IsInt()
    @IsNotEmpty()
    min_salary: number;

    @ApiProperty({ example: 25000000, type: Number })
    @IsInt()
    @IsNotEmpty()
    max_salary: number;

    @ApiStringField()
    qualification: string;

    @ApiStringField()
    work_type: string;

    @ApiStringField()
    working_time: string;
}

export class JobDto extends JobBaseDto {
    @ApiProperty({ example: 1, type: Number })
    @IsInt()
    id: number;
}

export class JobCreateDto extends JobBaseDto { }

export class JobReplaceDto extends JobBaseDto { }
