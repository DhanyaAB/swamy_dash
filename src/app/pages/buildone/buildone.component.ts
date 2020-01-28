import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../../services/app.service';
declare var $: any;

@Component({
  selector: 'app-buildone',
  templateUrl: './buildone.component.html',
  styleUrls: ['./buildone.component.scss']
})
export class BuildoneComponent implements OnInit {
  userId: string;
  data: any;
  data1 = [];
  img_id : any;
  job_url : any;
  suite_details: any;
  tableData:any;
  value:string;
  message : any;
  table: [];
  constructor(private activatedRoute: ActivatedRoute, private apiservice:AppService) {
    // this.activatedRoute.snapshot.params["userId"];
    // this.userId = parseInt(this.activatedRoute.snapshot.params["userId"]);
    // console.log(this.userId)
    this.value = "https://www.google.com"
   }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>{
      this.userId = this.activatedRoute.snapshot.params["userId"];
      // console.log(this.userId);
      this.getValuefromImageId(this.userId);
    })
    
  }

  getError(err_msg){
    this.message = err_msg;
      }  
    
      filter_table(condition)
      {
        // console.log("clicked",this.tableData)
        this.tableData = this.table;
        if(condition == "pass"){
          // console.log("clicked")
          this.tableData = this.table.filter(function(record) {
            // console.log(record)
            return record['status'] == "pass";
          });
        }else{
          if(condition == "total"){
            this.tableData = this.table
          }else{
          this.tableData = this.table.filter(function(record) {
            return record['status'] == "fail";
          });
        }}
      }

  getValuefromImageId(userid){
    this.apiservice.getValuebyImageTag(userid).subscribe(
      response=>{
        this.data = response;
        this.tableData = this.data[0].testsuite;
        this.table = this.tableData;
        this.job_url = this.data[0].job_url;
        this.img_id = this.data[0].image_id;
        this.suite_details = this.data[0].testsuite_details;
       console.log(this.suite_details);
      }
    )
  }
}


