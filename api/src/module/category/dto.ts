import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ApiStringField } from '../../shared/decorator';


export class CategoryBaseDto {
    @ApiStringField()
    name: string;
}


export class CategoryDto extends CategoryBaseDto {
    @ApiProperty({
        example: 1

    })
    @IsNumber()
    id: number;

}

export class CategoryCreateDto extends CategoryBaseDto {

}

export class CategoryReplaceDto extends CategoryBaseDto {

}



