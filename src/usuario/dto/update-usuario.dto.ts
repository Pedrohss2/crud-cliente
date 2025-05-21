import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioDto } from './create-usuario.dto';

export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {
    id: string;
    nome: string;
    email: string;
    telefone: string;
    senha: string;
}
