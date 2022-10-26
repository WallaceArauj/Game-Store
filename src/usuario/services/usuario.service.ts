import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Bcrypt } from "../../auth/bcrypt/bcrypt";
import { DeleteResult, ILike, Repository } from "typeorm";
import { Usuario } from "../entities/usuario.entity";



@Injectable()
export class UsuarioService {
    constructor(
        @InjectRepository(Usuario)
        private usuarioRepository: Repository<Usuario>,
        private bcrypt: Bcrypt
    ) {}

    async create(usuario: Usuario): Promise<Usuario> {
        return await this.usuarioRepository.save(usuario);
    }

    async findAll(): Promise<Usuario[]> {
        return await this.usuarioRepository.find();
    }

    async findById(id: number): Promise<Usuario> {
        const buscaUsuario = await this.usuarioRepository.findOneBy({ id });

        if (!buscaUsuario)
            throw new HttpException('Usuário não encontrado!', HttpStatus.NOT_FOUND);

        return buscaUsuario;
    }

    async findByUsuario(usuario: string): Promise<Usuario> {
        return await this.usuarioRepository.findOne({
            where: {
                usuario: usuario
            }
        });
    }

    async update(usuario: Usuario): Promise<Usuario> {

        const buscaUsuario = await this.findById(usuario.id);

        if (!buscaUsuario || !usuario.id)
            throw new HttpException('Usuário não encontrado!', HttpStatus.NOT_FOUND);

        return await this.usuarioRepository.save(usuario);
    }
   
}