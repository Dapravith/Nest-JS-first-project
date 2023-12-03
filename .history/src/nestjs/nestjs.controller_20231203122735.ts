/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateNestjsDto } from './dto/create-nestjs.dto';
import { UpdateNestjsDto } from './dto/update-nestjs.dto';

@Controller('nestjs')
export class NestjsController {
// GET /nestjs?type=fast --> []
@Get() 
getNestjs(@Query('type') type: string) {
    return [{ type }];
}
// GET /nestjs/:id --> {...}
@Get(':id')
getOneNestjs(@Param('id') id: string) {
    return [
        id,
    ];
}
// POST /nestjs/:id --> {...}
@Post()
createNestjs(@Body() createNestjsDto: CreateNestjsDto) {
    return {
        name: createNestjsDto.name,
    };
}
// PUT /nestjs/:id --> {...}
@Put(':id')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
updateNestjs(@Param('id') id: string, @Body() updateNestjs: UpdateNestjsDto) {
    return {
        id,
        name: UpdateNestjsDto,
    }
}
// DELETE /nestjs/:id --> {...}
@Delete(':id')
removeNesjs(@Param('id') id: string) {
    return {
        id,
    };
}   
}