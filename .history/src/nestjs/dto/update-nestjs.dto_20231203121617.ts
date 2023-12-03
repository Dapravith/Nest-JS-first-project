import { PartialType } from '@nestjs/mapped-types';
import { CreateNestjsDto } from './create-nestjs.dto';

export class UpdateUserDto extends PartialType(CreateNestjsDto) {}
