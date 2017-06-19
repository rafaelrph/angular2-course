import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = "http://github.com";
  urlImage: string = "http://lorempixel.com/400/200/nature/";
  value: string = "";
  valueSaved: string = "";
  isMouseOver: boolean = false;
  textValue:string = "text";

  constructor() { }

  getValue(){
    return 5;
  }

  clickHere() {
    alert("Button was clicked");
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  onKeyUpInput(event: KeyboardEvent){
    this.value = (<HTMLInputElement>event.target).value;
  }

  saveTextEnter(event: KeyboardEvent) {
    this.valueSaved = (<HTMLInputElement>event.target).value;
  }

  ngOnInit() {
  }

}
