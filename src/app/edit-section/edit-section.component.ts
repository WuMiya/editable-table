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
  public sorted: boolean = false;
  public editField: string = "";
  public width: number = 800;
  public height: number = 480;
  public textAlignment: string = "Left";
  public headerFontSize: number = 16;
  public tableFontSize: number = 14;
  public fontWeight: string = "Normal";
  public headerAlignment: string = "Left";
  public contenteditable: boolean = false;
  // contextmenu = false;
  // contextmenuX = 0;
  // contextmenuY = 0;
  // nRightClicks = 0;
  public color: string = "#ffecee";
  public alternateColor: string = "#fff";
  public headerBGColor: string = "#fff";
  public headerTxtColor: string = "#222";
  public tableTxtColor: string = "#333";
  public pageColor: string = "#fff";
  public recents: string[] = [this.color];
  public isVertical: boolean = true;
  public isDynamic: boolean = true;
  public cpPresetColors: any[] = ["#ea4256", "#ffa500", "#ffc966", "#f67d3b", "#43e5fd", "#20a5e6", "#1F917A", "#8B572A",
    "#000000", "#4A4A4A", "#ffffff", "#9B9B9B"
  ];
  public editType: string="";
  @Input() options;
  @Input() FWoptions;
  // @Output() widthUpdated: EventEmitter<any> = new EventEmitter<any>();
  // @Output() heightUpdated: EventEmitter<any> = new EventEmitter<any>();
  // @Output() verticalUpdated: EventEmitter<any> = new EventEmitter<any>();
  // @Output() columnWidthUpdated: EventEmitter<any> = new EventEmitter<any>();
  // @Output() editableTableShowed: EventEmitter<any> = new EventEmitter<any>();
  @Output() styleUpdated: EventEmitter<any> = new EventEmitter<any>();

  constructor() {

  }

  ngOnInit() {}

  // updateStyle(property: string, $event: any) {
  //   // const editType = $event.target.value;
  //   // this.types[property] = editType;
  //   //this.styleChange.emit(this.types);
  //   this.styleChange.emit({
  //     "type": "fontSize",
  //     "data": 333
  //   })
  //   this.styleChange.emit([{
  //     "type": "fontSize",
  //     "data": 333
  //   },{"type": "textAlign", "data": "left"}, {}])
  // }

  // updateStyle(type: string, value: any) {
  //   this.styleUpdated.emit({
  //     "type": type,
  //     "value": value
  //   });
  // }

  updateStyle(type: string, value: any) {
    this.styleUpdated.emit(
      {
        "type": type,
        "value": value
      }
    );
  }

  // // edit width of the display section
  // updateWidth($event) {
  //   this.width = parseInt($event.target.value, 10);
  //   if (this.width > 1600) {
  //     this.width = 1600;
  //   }
  //   this.widthUpdated.emit(this.width);
  // }


  // // edit height of the display section
  // updateHeight($event) {
  //   this.height = parseInt($event.target.value, 10);
  //   if (this.height > 2600) {
  //     this.height = 2600;
  //   }
  //   this.heightUpdated.emit(this.height);
  // }

  // // handle text alignment
  // textAlignmentChange(event: any) {
  //   this.textAlignment = event.target.value;
  //   return this.textAlignment;
  // }

  // // handle header alignment
  // headerAlignmentChange(event: any) {
  //   this.headerAlignment = event.target.value;
  //   return this.headerAlignment;
  // }

  // // handle header font size
  // updateHeaderFontSize($event) {
  //   this.headerFontSize = parseInt($event.target.value, 10);
  //   if (this.headerFontSize > 78) {
  //     this.headerFontSize = 78;
  //   }
  // }

  // // handle table font size
  // updateTableFontSize($event) {
  //   this.tableFontSize = parseInt($event.target.value, 10);
  //   if (this.tableFontSize > 78) {
  //     this.tableFontSize = 78;
  //   }
  // }

  // // handle table font weight
  // updateFontWeight(event: any) {
  //   this.fontWeight = event.target.value;
  //   return this.fontWeight;
  // }

  // updateVertical(isVertical) {
  //   this.isVertical =! isVertical;
  //   this.verticalUpdated.emit(isVertical);
  // }

  // updateColumnWidth(isDynamic) {
  //   this.isDynamic =! isDynamic;
  //   this.columnWidthUpdated.emit(isDynamic);
  // }

  // showEditableTable(contenteditable) {
  //   this.contenteditable =! contenteditable;
  //   this.editableTableShowed.emit(this.contenteditable);
  // }

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
  
}
