import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    // table data
    data: any[];
    headers: any[] = [{
        label: "title qweqwe",
        field: "title",
        sortable: true
    }, {
        label: "desc qwewqe",
        field: "desc",
        sortable: false
    },{
        label: "budget",
        field: "budget",
        sortable: true
    },{
        label: "total_DIN_saved_kgs",
        field: "total_DIN_saved_kgs",
        sortable: false
    }];

    selectedRow: any[];

    constructor(private http: HttpClient) {
        this.http.get('http://localhost:4200/assets/Countries.json')
        .subscribe((data: any[]) => {
            this.data = data;
        });
    }

}
