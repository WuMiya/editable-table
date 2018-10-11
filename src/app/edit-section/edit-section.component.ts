import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';


@Component({
  selector: 'app-edit-section',
  templateUrl: './edit-section.component.html',
  styleUrls: ['./edit-section.component.scss']
})
export class EditSectionComponent implements OnInit {
  // Sortable table
  private sorted: boolean = false;
  private editField: string = "";
  private width: number = 1000;
  private height: number = 480;
  private textAlignment: string = "Left";
  private headerFontSize: number = 16;
  private tableFontSize: number = 14;
  private fontWeight: string = "Normal";
  private headerAlignment: string = "Left";
  // contextmenu = false;
  // contextmenuX = 0;
  // contextmenuY = 0;
  // nRightClicks = 0;
  color: string = "#ffecee";
  alternateColor: string = "#fff";
  headerBGColor: string = "#fff";
  headerTxtColor: string = "#222";
  tableTxtColor: string = "#333";
  pageColor: string = "#fff";
  recents: string[] = [this.color];

  cpPresetColors: any[] = ["#ea4256", "#ffa500", "#ffc966", "#f67d3b", "#43e5fd", "#20a5e6", "#1F917A", "#8B572A",
    "#000000", "#4A4A4A", "#ffffff", "#9B9B9B"
  ];

  options = [{
      name: "Left",
      value: "left"
    },
    {
      name: "Center",
      value: "center"
    },
    {
      name: "Right",
      value: "right"
    }
  ]

  // font-weight options
  FWoptions = [{
      name: "Normal",
      value: "normal"
    },
    {
      name: "Lighter",
      value: "lighter"
    },
    {
      name: "Bold",
      value: "bold"
    }
  ]

  // menu items
  menuItems = ["Copy row", "Delete row"]

  @Input() data;
  @Input() headers = [];

  // @Output() widthUpdated: EventEmitter<any> = new EventEmitter<any>();

  constructor() {

  }

  ngOnInit() {}

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

  // edit width of the display section
  updateWidth($event) {
    this.width = parseInt($event.target.value, 10);
    if (this.width > 1600) {
      this.width = 1600;
    }
  }

  // edit height of the display section
  updateHeight($event) {
    this.height = parseInt($event.target.value, 10);
    if (this.height > 2600) {
      this.height = 2600;
    }
  }

  // handle text alignment
  textAlignmentChange(event: any) {
    this.textAlignment = event.target.value;
    return this.textAlignment;
  }

  // handle header alignment
  headerAlignmentChange(event: any) {
    this.headerAlignment = event.target.value;
    return this.headerAlignment;
  }

  // handle header font size
  updateHeaderFontSize($event) {
    this.headerFontSize = parseInt($event.target.value, 10);
    if (this.headerFontSize > 78) {
      this.headerFontSize = 78;
    }
  }

  // handle table font size
  updateTableFontSize($event) {
    this.tableFontSize = parseInt($event.target.value, 10);
    if (this.tableFontSize > 78) {
      this.tableFontSize = 78;
    }
  }

  // handle table font weight
  fontWeightChange(event: any) {
    this.fontWeight = event.target.value;
    return this.fontWeight;
  }

  // onRightClick($event) {
  //   this.contextmenuX = $event.clientX
  //   this.contextmenuY = $event.clientY
  //   this.contextmenu = true;
  //   this.nRightClicks++;
  //   console.log($event);
  // }

  // disableContextMenu() {
  //   this.contextmenu = false;
  // }
  headerTxtColorSelected($event) {
    
    console.log($event);
  }

  
}
