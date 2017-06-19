import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService {

  constructor() { }

  getUrl(){ 
    return "http://github.com/rafaelrph";
  }

  getCourses(){
    return ['Angular2', 'Java', 'Python', 'PHP'];
  }

}
