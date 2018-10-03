import { Component, OnInit, Input, Output } from '@angular/core';
import { ColorPickerComponent} from 'src/app/color-picker/color-picker.component';

@Component({
  selector: 'app-newtable',
  templateUrl: './newtable.component.html',
  styleUrls: ['./newtable.component.scss']
})
export class NewtableComponent implements OnInit {
  // Sortable table
  private sorted: boolean = false;
  private editField: string = "";
  private width: number=1000;
  private height: number=480;
  private textAlignment: string="";

  options = [
    { name: "Left", value: "left" },
    { name: "Center", value: "center" },
    { name: "Right", value: "right" }
  ]

  @Input() data=[];
  @Input() headers=[];

  constructor() {
    
  }

  ngOnInit() {
  }

  // for color-picker
  color: string="#ffecee";
  alternateColor: string="#fff";
  headerBGColor: string="#fff";
  headerTxtColor: string="#222";
  tableTxtColor: string="#333";
  recents: string[] = [this.color];

  cpPresetColors: any[] = ["#ea4256", "#ffa500", "#ffc966", "#f67d3b", "#43e5fd", "#20a5e6", "#1F917A", "#8B572A", 
      "#000000","#4A4A4A", "#ffffff", "#9B9B9B"];

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
    if (this.editField !="") {
      this.data[id][property] = this.editField;
    } 
    else {
      alert("This field can not be empty.");
    }
  }

  // edit width of display section
  updateWidth($event) {
    this.width = parseInt($event.target.value, 10);
    if(this.width > 1600) {
      this.width = 1600;
    }
  }

  // edit height of display section
  updateHeight($event) {
    this.height = parseInt($event.target.value, 10);
    if(this.height > 2600){
      this.height = 2600;
    }
  }

  // handle text alignment
  textAlignmentChange (event: any) {
    this.textAlignment = event.target.value;
  }

}
