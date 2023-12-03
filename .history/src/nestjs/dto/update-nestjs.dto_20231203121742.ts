import { PartialType } from '@nestjs/mapped-types';
import { CreateNestjsDto } from './create-nestjs.dto';

export class UpdateNestjsDto extends PartialType(CreateNestjsDto) {}
