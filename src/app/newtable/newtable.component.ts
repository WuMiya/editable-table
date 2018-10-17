import {
  Component,
  OnInit,
  Input,
  ViewChild
} from '@angular/core';

import { EditSectionComponent } from '../edit-section/edit-section.component';

@Component({
  selector: 'app-newtable',
  templateUrl: './newtable.component.html',
  styleUrls: ['./newtable.component.scss']
})
export class NewtableComponent implements OnInit {
  // Sortable table
  private sorted: boolean = false;
  // editable fields
  private editField: string = "";

  @Input() data;
  @Input() headers = [];
  @ViewChild(EditSectionComponent) child: EditSectionComponent;

  constructor() {

  }

  ngOnInit() {
    // console.log("child: ", this.child);
  }

  // sortable table
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

  // edit table field
  editValue(id: number, property: string, $event: any) {
    this.editField = $event.target.textContent;
    this.data[id][property] = this.editField;
  }

  editHeaderValue(id: number, property: string, $event: any) {
    this.editField = $event.target.textContent;
    this.headers[id][property] = this.editField;
  }

  // onheaderTxtColorChange($event) {
  //   let headerTxtColor = $event.color;
  //   console.log(headerTxtColor);
  // }
  widthUpdatedHandler($event) {
    this.child.width = $event;
    console.log(this.child.width)
  }

  heightUpdatedHandler($event) {
    this.child.height = $event;
  }


  
}
