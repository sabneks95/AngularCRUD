import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SreviceService } from '../srevices/srevice.service';
import { IblogPost } from './data-type'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy{
  blogPost!:IblogPost[];
  constructor( private post:SreviceService, private router:Router) { }
  

  ngOnInit(): void {
   this.post.getData().subscribe((result:IblogPost[])=>{
     this.blogPost = result;
   });
  } 
  addBtn = () =>{
    //this.router.navigateByUrl('addRecord');
    this.router.navigate(['/addRecord']);
    
  }
  editBtn(id:any){
    this.router.navigateByUrl(`editRecord/${id}`);
  }
 
  deleteBtn(item:any){
    this.post.deletData(item.id).subscribe(result=>{
      console.log(result);
      this.blogPost=this.blogPost.filter(val=>{
        return val.id != item.id;
      })
      alert("Record deleted");
    });
  }

  ngOnDestroy(): void {
    
  }
}
