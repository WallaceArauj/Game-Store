import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { UseGuards } from "@nestjs/common/decorators";
import { Usuario } from "../entities/usuario.entity";
import { UsuarioService } from "../services/usuario.service";



@Controller('/usuario')
export class UsuarioController{
    constructor(
        private readonly usuarioService: UsuarioService
    ) {}
    
    @UseGuards()
    @Post('/cadastrar')
    @HttpCode(HttpStatus.CREATED)
    callCreate(@Body() usuario: Usuario): Promise<Usuario> {
        return this.usuarioService.create(usuario);
    }

    @Get()
    @HttpCode(HttpStatus.OK)
    callFindAll(): Promise<Usuario[]> {
        return this.usuarioService.findAll();
    }


    @Put('/atualizar')
    @HttpCode(HttpStatus.OK)
    callUpdate(@Body() usuario: Usuario): Promise<Usuario> {
        return this.usuarioService.update(usuario);
    }


}