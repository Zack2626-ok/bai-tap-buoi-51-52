import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { WardDto } from '../ward/dto';


export class ProvinceBaseDto {
    @ApiProperty({
        example: 'hà nội'
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    name: string;
}


export class ProvinceDto extends ProvinceBaseDto {
    @ApiProperty({
        example: 1

    })
    @IsNumber()
    id: number;

    @ApiProperty({
        type: WardDto,
        isArray: true
    })
    wards: WardDto[]
}




