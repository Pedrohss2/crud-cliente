import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class UsuarioService {

  constructor(private prisma: PrismaService) {}

  create(createUsuarioDto: CreateUsuarioDto) {
    this.prisma.cliente.create({ data: createUsuarioDto});
  }

  findAll() {
    return this.prisma.cliente.findMany();
  }

  findOne(id: number) {
    return this.prisma.cliente.findUnique({ 
      where: { 
        id,
      }
    });
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return this.prisma.cliente.update( { 
      data: updateUsuarioDto,
      where: {
        id
      }
    });
  }

  remove(id: number) {
    return this.prisma.cliente.delete({ 
      where: { 
        id 
      }
    });
  }
}
