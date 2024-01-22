import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-standalone',
  templateUrl: './standaloneexample.component.html',
  styleUrls: ['./standaloneexample.component.css'],
  standalone:true
})
export class StandaloneexampleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}