import { Component, OnInit } from '@angular/core';
import { Aboutme } from '../aboutme';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  abouts : Aboutme 
  constructor() { }

  ngOnInit(): void {
  }

}
