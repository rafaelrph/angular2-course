import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = "http://github.com";
  urlImage: string = "http://lorempixel.com/400/200/nature/";

  constructor() { }

  getValue(){
    return 5;
  }

  ngOnInit() {
  }

}
