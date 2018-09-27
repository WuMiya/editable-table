import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-newtable',
  templateUrl: './newtable.component.html',
  styleUrls: ['./newtable.component.scss']
})
export class NewtableComponent implements OnInit {

  data: any[];

  constructor(private http: HttpClient) {
    this.http.get('http://localhost:4200/assets/Countries.json')
      .subscribe((data: any[]) => {
          this.data = data;
          console.log(data);
      });
  }

  ngOnInit() {
  }

}
