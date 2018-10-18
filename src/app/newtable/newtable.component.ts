import {
  Component,
  OnInit,
  Input,
  Output,
  ViewChild,
  EventEmitter
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
  @Input() buttonText = [];
  @Output() ctrlElementClicked: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild(EditSectionComponent) child: EditSectionComponent;

  constructor() {

  }

  ngOnInit() {
    // console.log("child: ", this.child);
  }

  buttonClicked(d, ct): void {
    if (this.child.contenteditable === true) {
      this.ctrlElementClicked.emit({selected: d, context: ct});
    } 
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
  }

  updateTable(id: number, property: string, $event: any) {
    const editField = $event.target.textContent;
    if(property == "label") {
      this.headers[id][property] = editField;
    } else {
      this.data[id][property] = editField;
    }
  }

  // editHeaderValue(id: number, property: string, $event: any) {
  //   this.editField = $event.target.textContent;
  //   this.headers[id][property] = this.editField;
  // }

  widthUpdatedHandler($event) {
    this.child.width = $event;
  }

  heightUpdatedHandler($event) {
    this.child.height = $event;
  }


  
}
