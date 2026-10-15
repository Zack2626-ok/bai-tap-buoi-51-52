import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ProvinceDto } from '../province/dto';
import { ApiIntField, ApiStringField } from '../../shared/decorator';
import { WardDto } from '../ward/dto';


export class CandicateBaseDto {
    @ApiStringField()
    name: string;

    @ApiIntField()
    phone: number;

    @ApiStringField()
    email: string;

    @ApiStringField()
    gender: string;

    @ApiIntField()
    province_id: ProvinceDto;

    @ApiIntField()
    ward_id: WardDto;

    @ApiStringField()
    address_detail: string;
}


export class CandicateDto extends CandicateBaseDto {
    @ApiProperty({
        example: 1

    })
    @IsNumber()
    id: number;

}

export class CandicateCreateDto extends CandicateBaseDto {}

export class CandicateReplaceDto extends CandicateBaseDto {}


