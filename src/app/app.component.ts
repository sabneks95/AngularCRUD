import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SreviceService } from './srevices/srevice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AngularCRUD';
 
  constructor(){
  }
  ngOnInit(): void {
   

    // this.post.getData().subscribe(result =>{
    //   this.blogPost = result;
    //   console.log(this.blogPost); 
    // })
  }


}
