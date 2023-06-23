import {IsString} from "class-validator";

export class CreateStudentDto{
   @IsString()//validator
    fullname:string

    @IsString()
    id:string

    @IsString()
    address:string

    @IsString()
    contact:string
}
