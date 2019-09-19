import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  
  posts = [];

  constructor( private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this.posts = data;
    })
  }
}
