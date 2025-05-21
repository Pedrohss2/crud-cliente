import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UsuarioService {

  constructor(private readonly prisma: PrismaService) {}

  create(createUsuarioDto: CreateUsuarioDto) {
    return null;
  }

  findAll() {
    return `This action returns all usuario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usuario`;
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
