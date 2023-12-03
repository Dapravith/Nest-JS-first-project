/* eslint-disable prettier/prettier */
import { Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

@Controller('nestjs')
export class NestjsController {
// GET /nestjs?type=fast --> []
@Get() 
getNestjs(@Query('type') type: string) {
    return [];
}
// GET /nestjs/:id --> {...}
@Get(':id')
getOneNestjs(@Param('id') id: string) {
    return [];
}
// POST /nestjs/:id --> {...}
@Post()
createNestjs() {
    return [];
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