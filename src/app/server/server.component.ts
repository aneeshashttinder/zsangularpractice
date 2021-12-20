import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

   userName:string = "SomeString";

  constructor() { }

  ngOnInit(): void {
  }

  flipEnabled(){
    this.isEnabled = !this.isEnabled;
  }
}
