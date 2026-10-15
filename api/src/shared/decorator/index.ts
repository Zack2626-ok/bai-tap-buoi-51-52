import { ApiProperty } from '@nestjs/swagger';
import { applyDecorators } from '@nestjs/common';
import { IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';
export function ApiStringField(): PropertyDecorator {
    return applyDecorators(
        ApiProperty({
            type: String,
            nullable: false,
        }),
        IsString(),
        IsNotEmpty(),
        MinLength(1)
    )

}

export function ApiStringFieldNullable(): PropertyDecorator {
    return applyDecorators(
        ApiProperty({
            type: 'string',
            nullable: true,
        }),
        IsString(),
    );
}

export function ApiIntField(): PropertyDecorator {
    return applyDecorators(
        ApiProperty({
            example: 1,
            type: 'number',
            nullable: true,
        }),
        IsNumber({
            allowNaN: false,
            allowInfinity: false,
        }),
        IsNotEmpty(),
    );
}