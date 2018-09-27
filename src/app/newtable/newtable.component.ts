import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-newtable',
  templateUrl: './newtable.component.html',
  styleUrls: ['./newtable.component.scss']
})
export class NewtableComponent implements OnInit {
  // Sortable table
  private sorted = false;

  @Input() data=[];
  @Input() headers=[];

  constructor() {
    console.log(this.headers);
  }

  ngOnInit() {
  }

  sortBy(header: any): void {
    // if (header.sortable) {
      let by: string = header.field;

      this.data.sort((a: any, b: any) => {
        if (a[by] < b[by]) {
            return this.sorted ? 1 : -1;
        }
        if (a[by] > b[by]) {
            return this.sorted ? -1 : 1;
        }
        return 0;
      });
      this.sorted = !this.sorted;
    //}
  }

}
