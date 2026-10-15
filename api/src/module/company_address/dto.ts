import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ApiIntField, ApiStringField } from '../../shared/decorator';
import { CompanyDto } from '../companies/dto';
import { ProvinceDto } from '../province/dto';
import { WardDto } from '../ward/dto';


export class CompanyAdressBaseDto {
    @ApiIntField()
    company_id: CompanyDto;

    @ApiIntField()
    procince_id: ProvinceDto;

    @ApiIntField()
    ward_id: WardDto;

    @ApiStringField()
    address_detail: string;

}


export class CompanyAdressDto extends CompanyAdressBaseDto {
    @ApiProperty({
        example: 1

    })
    @IsNumber()
    id: number;



}

export class CompanyAdressCreateDto extends CompanyAdressBaseDto {

}

export class CompanyAdressReplaceDto extends CompanyAdressBaseDto {

}



