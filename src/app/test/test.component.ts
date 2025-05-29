import { Component, Input, SimpleChanges } from '@angular/core';
import { Test } from '../models/test.model';
import { Student } from '../Student.model';
import { studentService } from '../student.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {

avg: number =0;

  @Input()
  student: Student | undefined

  constructor(private _studentService: studentService) {

  }

ngOnChanges( changes: SimpleChanges): void {
  
 console.log("ngOnInit", this.student);
    console.log(this.student?.id);
    
    this._studentService.avgStudent(this.student?.id || 0).then(avg => {
      this.avg = avg;
      console.log(avg);
      
    }
    ).catch(err => {
      console.error(err);
      this.avg = 0;
    }
    );

}



  }
