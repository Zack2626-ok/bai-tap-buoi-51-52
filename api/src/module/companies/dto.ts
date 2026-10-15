import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ApiIntField, ApiStringField } from '../../shared/decorator';


export class CompanyBaseDto {
    @ApiStringField()
    name: string;

    @ApiStringField()
    email: string;

    @ApiIntField()
    phone: number;

    @ApiIntField()
    tax: number;

    @ApiStringField()
    website: string;

    @ApiIntField()
    rate: number;


}


export class CompanyDto extends CompanyBaseDto {
    @ApiProperty({
        example: 1

    })
    @IsNumber()
    id: number;



}

export class CompanyCreateDto extends CompanyBaseDto {

}

export class CompanyReplaceDto extends CompanyBaseDto {

}



