import {
  Component,
  OnInit,
  Input,
  Output,
  // ViewChild,
  EventEmitter
} from '@angular/core';

// import { EditSectionComponent } from '../edit-section/edit-section.component';
// import { TableService } from '../table/table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  // Sortable table
  private sorted: boolean = false;
  // editable fields
  private editField: string = "";

  @Output() ctrlButtonClicked: EventEmitter<any> = new EventEmitter<any>();
  // @ViewChild(EditSectionComponent) child: EditSectionComponent;

  constructor() {}

  ngOnInit() {

  }

  @Input() data=[];
  @Input() headers=[];
  @Input() buttonText=[];
  @Input() width: number;
  @Input() height: number;
  @Input() headerAlignment: string;
  @Input() textAlignment: string;
  @Input() headerFontSize: number;
  @Input() tableFontSize: number;
  @Input() fontWeight: string;
  @Input() headerTxtColor: string;
  @Input() tableTxtColor: string;
  @Input() headerBGColor: string;
  @Input() color: string;
  @Input() alternateColor: string;
  @Input() pageColor: string;
  @Input() isVertical: boolean;
  @Input() isDynamicWidth: boolean;
  @Input() contenteditable: boolean;
  @Input() isDownloadable: boolean;

  buttonClicked(d, ct){
    this.ctrlButtonClicked.emit({selected: d, context: ct});
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
  
}
