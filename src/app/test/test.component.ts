import { Component, Input ,SimpleChanges} from '@angular/core';
import { Test } from '../models/test.model';
import { Student } from '../Student.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {


  // @Input()
  // testsList :Test[] |undefined

  @Input()
  student:Student|undefined

  
  
  

  

}
