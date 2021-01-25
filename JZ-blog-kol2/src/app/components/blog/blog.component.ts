import { Component, OnInit } from '@angular/core';

import {DataService} from '../../services/jz-data.service';


@Component({
  //selector: 'app-blog',
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {


 public items$: any;

  constructor(private service: DataService) {
  }

  ngOnInit(): void {
  this.getAll();   }

   getAll(){
       this.service.getAll().subscribe(response => {
         this.items$ = response;
     });
     }

}
