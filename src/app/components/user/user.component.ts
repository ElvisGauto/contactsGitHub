import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  
  private posts = [];

  constructor( private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe(data=> {
      this.posts = data;
    })
  }
}
