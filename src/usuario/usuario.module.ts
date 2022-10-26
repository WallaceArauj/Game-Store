import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsuarioController } from "./controllers/usuario.controller";
import { Usuario } from "./entities/usuario.entity";
import { UsuarioService } from "./services/usuario.service";

/**
 * Modulo para receber meus controllers e services do meu usuario
 * 
 */

@Module({
    controllers: [UsuarioController],
    imports: [TypeOrmModule.forFeature([Usuario])],
    exports: [TypeOrmModule],
    providers: [UsuarioService]
})

export class UsuarioMdule {};