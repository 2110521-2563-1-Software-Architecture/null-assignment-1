import {IsInt, IsString} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class Book {
    @ApiProperty()
    @IsInt()
    id: Number;
    
    @ApiProperty()
    @IsString()
    title: String;

    @ApiProperty()
    @IsString()
    author: String;
};