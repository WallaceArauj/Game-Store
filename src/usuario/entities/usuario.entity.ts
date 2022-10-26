import { IsEmail, IsNotEmpty, MinLength, minLength } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity({name: 'tb_usuario'})
export class Usuario {

    @PrimaryGeneratedColumn()
    public id: number;

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    public nome: string;

    @IsEmail()
    @Column({length: 255, nullable: false})
    public usuario: string;

    @IsNotEmpty()
    @MinLength(8)
    @Column({length: 255, nullable: false})
    public senha: string;

    @Column({length: 4000})
    public foto: string;

}