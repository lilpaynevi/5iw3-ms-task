import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { Task } from 'stubs/task/v1alpha/task';
export class UpdateTaskDto extends PartialType(CreateTaskDto) {
    constructor(task: Task) {
        super();
        this.name = task.name;
        this.dueDate = new Date(task.dueDate);
    }
    
    id: number;
    name: string;
    dueDate: Date;
}
