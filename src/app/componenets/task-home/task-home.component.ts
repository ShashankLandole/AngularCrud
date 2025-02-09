import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ReactiveFormsModule , FormGroup, FormBuilder} from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { Task } from '../../domain/Task';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-home',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './task-home.component.html',
  styleUrl: './task-home.component.scss'
})
export class TaskHomeComponent implements OnInit {
  
  form : FormGroup;
  task : Task[] = [];
  editId : number | null = null;

  constructor(private formBuilder : FormBuilder, private taskService : TaskService){
    this.form = formBuilder.group({
      email : '',
      password : '',
      phoneNumber : '',
      city : '',
      textArea : ''
    });
  }
  ngOnInit(): void {
    this.fetchData();
  }

  onSubmit(){
    const taskData = this.form.value;

    if(this.editId !== null){
      console.log("this is taskdata id",this.editId);
      this.taskService.update(taskData,this.editId).subscribe({
        
        next : (response)=>{
          console.log("Data update Successfully",response);
          this.fetchData();
          this.editId = null;
          this.form.reset();

        },
        error : (err)=>{
          console.log("Error Data updating",err);
        },
      });
    }else{
      this.taskService.save(taskData).subscribe({
        next : (response)=>{
          console.log("Data Save Successfully",response);
          this.fetchData();
        },
        error : (err)=>{
          console.log("Error Data Saving",err);
        }
      });
      this.form.reset();

    }
   
  }

  fetchData(){
    this.taskService.getAll().subscribe({
      next : (data) =>{
        this.task = data;
        console.log("suucessfull fetching ");
      },
      error : (err) =>{
        console.log("error in fetching ");
      }
    });
  }

  delete(id : number){
    this.taskService.delete(id).subscribe({
      next : (response)=>{
        console.log(`${response}`);
        this.fetchData();
      },
      error : (err) =>{
        console.log("error in delete", err);
      }
    });
  }

  update(task : Task){
    this.editId = task.id;
    this.form.patchValue(task);
    console.log("update is working ");
  }


}
