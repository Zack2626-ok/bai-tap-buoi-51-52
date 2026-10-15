import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ProvinceDto } from '../province/dto';


export class WardBaseDto {
    @ApiProperty({
        example: 'phường gì đấy'
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    name: string;
}


export class WardDto extends WardBaseDto {
    @ApiProperty({
        example: 1

    })
    @IsNumber()
    id: number;

    // @ApiProperty()
    // provinceId: ProvinceDto;
}





