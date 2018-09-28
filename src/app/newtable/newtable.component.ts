import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-newtable',
  templateUrl: './newtable.component.html',
  styleUrls: ['./newtable.component.scss']
})
export class NewtableComponent implements OnInit {
  // Sortable table
  private sorted = false;
  editField: string;

  @Input() data=[];
  @Input() headers=[];

  constructor() {
    
  }

  ngOnInit() {
  }

  sortBy(header: any): void {
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
  }

  editValue(id: number, property: string, $event: any) {
    this.editField = $event.target.textContent;
    if (this.editField !="") {
      this.data[id][property] = this.editField;
    } 
    else {
      alert("This field can not be empty.");
    }
  }

}
