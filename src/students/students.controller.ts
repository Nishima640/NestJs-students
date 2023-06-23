import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateStudentDto } from './dtos/student.dto';
import { StudentsServices } from './students.service';

@Controller('students')
export class StudentsController {
    studentsService: StudentsServices;

    constructor(){
        this.studentsService = new StudentsServices();
    }
    @Get()
    listStudents(){
        return this.studentsService.findAll()
    }

    @Post()
    createStudent(@Body() body: CreateStudentDto){
        return this.studentsService.create(body);
    }

    @Get('/:id')
    getStudent(@Param('id') id:string){
        return this.studentsService.findOne(id);
    }

   
}