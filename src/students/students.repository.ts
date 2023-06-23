import { readFile,writeFile } from "fs/promises"
import { CreateStudentDto } from "./dtos/student.dto";

export class StudentsRepository{
    async findOne(id:string){
        const contents = await readFile('students.json','utf8');
        const students = JSON.parse(contents);
        return students[id];
    }
    async findAll(){
        const contents = await readFile('students.json','utf8');
        const students = JSON.parse(contents);
        return students;
    }
    async create(student:CreateStudentDto){
        const readfile = await readFile('students.json','utf8');
        const students = JSON.parse(readfile);
        students[student.id]={
            fullname:student.fullname,
            id:student.id,
            address:student.address,
            contact:student.contact};
        await writeFile('students.json',JSON.stringify(students));
    }
}