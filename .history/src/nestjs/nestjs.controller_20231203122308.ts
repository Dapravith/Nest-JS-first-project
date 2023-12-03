/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateNestjsDto } from './dto/create-nestjs.dto';

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
        name: createNestjsDto.name
    };
}
// PUT /nestjs/:id --> {...}
@Put(':id')
updateNestjs() {
    return [];
}
// DELETE /nestjs/:id --> {...}
@Delete(':id')
deleteNestjs() {
    return [];
}   
}