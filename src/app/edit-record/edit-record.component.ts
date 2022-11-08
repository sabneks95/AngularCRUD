import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SreviceService } from '../srevices/srevice.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-edit-record',
  templateUrl: './edit-record.component.html',
  styleUrls: ['./edit-record.component.css']
})
export class EditRecordComponent implements OnInit {
  formvalue!:FormGroup;
  blogPost:any=[];
  resultID:any;
  constructor(private fb:FormBuilder,
    private post:SreviceService, 
    private router:Router, 
    private location:Location, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.formvalue = this.fb.group({
      title:[''],
      body:['']
    })
    let id = this.route.snapshot.params['id'];
    console.log(id);
    this.post.getPostById(id).subscribe((result:any)=>{
    //console.log(result);
    this.resultID=result.id;
    this.formvalue.patchValue({title:result.title, body:result.body})     
    })
  }

  editData(){ 
    if(this.formvalue.valid){
      this.post.updateData(this.formvalue.value, +this.resultID).subscribe(res=>{
        alert('Record Updated');
        this.formvalue.reset();
        this.location.back();
      })
    }  


  }

  closeBtn(){
    this.location.back();
  }
}
