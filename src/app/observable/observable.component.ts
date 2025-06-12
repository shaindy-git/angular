import { Component } from '@angular/core';
import { filter, interval, map, Observable } from 'rxjs';
import { Student } from '../Student.model';
import { studentService } from '../student.service';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent {

  students: Student[] = [];
  i: number = 0;

  studentName: Observable<string> = new Observable((observer) => {
    this.students.forEach((student) => {
      observer.next(student.firstName);
    });
  }

  );


  student: Observable<Student> = new Observable((observer) => {
    this.students.forEach((student) => {
      observer.next(student);
    });
  });

  timer: Observable<Date> = new Observable((observer) => {
    setInterval(() => {
      observer.next(new Date());
    }, 1000);
  });

  timerInterval: Observable<Date> = interval(1000).pipe(
    map(() => {
      return new Date();
    })
  );

  email: Observable<string> = new Observable((observer) => {
    this.students.forEach((student) => {
      if (student.active) {
        observer.next("example@" + student.firstName + ".com");
      }
    });
  });

  email2: Observable<Student> = new Observable((observer) => {
    this.students.forEach((student) => {
      if (student.active) {
        observer.next(student);
      }
    });
  })




  constructor(private _studentService: studentService) {
    _studentService.getStudentSlowly().then((students) => {
      this.students = students;

      this.studentName.subscribe((name) => {
        console.log("studentName " + name);
      })


      this.student.pipe(map((student) => { return student.firstName })).subscribe((name) => {
        console.log("student " + name)
      })


      // this.timer.subscribe((time) => {
      //   console.log("timer " + time.toLocaleTimeString());
      // })

      // this.timerInterval.subscribe((time) => {
      //   console.log("timerInterval " + time.toLocaleTimeString());
      // })

      // this.timer.pipe(map((time) => { return time.toLocaleTimeString() })).subscribe((time) => {
      //   console.log("timer " + time);
      // })

      // this.timerInterval.pipe(map((time) => { return time.toLocaleTimeString() })).subscribe((time) => {
      //   console.log("timerInterval " + time);
      // })

      this.email.subscribe((email) => {
        console.log("email " + email);
      })
      this.email2.pipe(filter((student)=>{return student.active===true}),map((student) => { return "example@" + student.firstName + ".com" })).subscribe((email) => {
        console.log("email2 " + email);
      }
      )



    })
  }

}
