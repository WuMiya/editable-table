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
  private width: number;
  private height: number;

  @Input() data=[];
  @Input() headers=[];

  constructor() {
    
  }

  ngOnInit() {
  }

  // for color-picker
  color: string="#ffecee";
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

  editValue(id: number, property: string, $event: any) {
    this.editField = $event.target.textContent;
    if (this.editField !="") {
      this.data[id][property] = this.editField;
    } 
    else {
      alert("This field can not be empty.");
    }
  }

  updateWidth($event) {
    this.width = $event.target.value.parseInt();
    
  }

  updateHeight($event) {
    this.height = $event.target.value.parseInt();
    
  }
  

}
