import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  anio = (new Date).getFullYear();
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  verCurriculum(){
    window.open( "https://drive.google.com/file/d/1V28_jRj9bqpRihqshzvKvfbz9O8n99kO/view?usp=sharing" );
  }

}
