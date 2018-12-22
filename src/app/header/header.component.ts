import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '../../../node_modules/@angular/material';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router : Router) { }
  
  ngOnInit() {
  }

  onTabClick(event: MatTabChangeEvent){
    console.log('event => ', event);
  console.log('index => ', event.index);
  console.log('tab => ', event.tab);
  if(event.index == 0)
  this.router.navigate(['login']); 
  else if(event.index == 1)
  this.router.navigate(['register']); 

  }
}
