import { CreateStudentDto } from "./dtos/student.dto";
import { StudentsRepository} from "./students.repository"

export class StudentsServices{
    studentRepo: StudentsRepository;

    constructor(){
        this.studentRepo = new StudentsRepository();
    }

    findOne(id:string){
        return this.studentRepo.findOne(id);
    }

    findAll(){
        return this.studentRepo.findAll();
    }

    create(student:CreateStudentDto){
        return this.studentRepo.create(student);
    }

}