import { Component } from '@angular/core';

import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent{

  url: string;
  courses: string[];
  coursesService: CoursesService;  
  
  constructor(coursesService: CoursesService){
    this.coursesService = coursesService;
    this.courses = this.coursesService.getCourses();
    this.url = this.coursesService.getUrl();
  }

}
