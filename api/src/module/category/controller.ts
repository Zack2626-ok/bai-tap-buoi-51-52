import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CategoryService } from "./service";
import { CategoryCreateDto, CategoryDto, CategoryReplaceDto } from "./dto";
import { ApiResponse } from "@nestjs/swagger";


@Controller('categories')
export class CategoryController {
    constructor(private categoryService: CategoryService) { }


    @Get()
    @ApiResponse({
        status: 201,
        description: 'All record has been successfully created.',
        type: CategoryDto,
        isArray: true
    })
    getCategories() {
        return this.categoryService.getList();
    }


    @Get(':id')
    @ApiResponse({
        status: 200,
        description: 'The record has been successfully retrieved.',
        type: CategoryDto,
    })
    getCategory(@Param('id') id: number) {
        return this.categoryService.getById(id);
    }

    @Post()
    @ApiResponse({
        status: 201,
        description: 'The record has been successfully created.',
        type: CategoryDto,
    })
    createCategory(@Body() category: CategoryCreateDto) {
        console.log(category);
        return this.categoryService.create(category);
    }

    @Put(':id')
    @ApiResponse({
        status: 200,
        description: 'The record has been successfully updated.',
        type: CategoryDto,
    })
    replaceCategory(@Param('id') id: number, @Body() category: CategoryReplaceDto) {

        return this.categoryService.replace(category);
    }


    @Delete(':id')
    @ApiResponse({
        status: 200,
        description: 'The record has been successfully deleted.',
        type: CategoryDto,
    })
    deleteCategory(@Param('id') id: number) {
        return this.categoryService.delete(id);
    }

}