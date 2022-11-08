import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SreviceService } from '../srevices/srevice.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css']
})
export class AddRecordComponent implements OnInit {

  formvalue!:FormGroup;
   blogPost:any=[];
  constructor(private fb:FormBuilder, private post:SreviceService, private location:Location) { }

  ngOnInit(): void {
   this.formvalue = this.fb.group({
      title:[''],
      body:['']
     });
  }

  submitData(){
   this.post.postData(this.formvalue.value).subscribe(result=>{
    console.log(result);
    alert('Data added');
    this.location.back();
   },
   error=>{
    console.error(error);
   })
  }

  closeBtn(){
    this.location.back();
  }
}
