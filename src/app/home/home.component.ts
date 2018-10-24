import { Component, OnInit } from '@angular/core';
import { TableService } from '../tableServices/table.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public data=[];
  public headers = [];
  public buttonText = [];

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
  public color: string = "#ffecee";
  public alternateColor: string = "#fff";
  public headerBGColor: string = "#fff";
  public headerTxtColor: string = "#222";
  public tableTxtColor: string = "#333";
  public pageColor: string = "#fff";
  public recents: string[] = [this.color];
  public isDownloadable: boolean;
  public isVertical: boolean;
  public isDynamic: boolean;
  public cpPresetColors: any[] = ["#ea4256", "#ffa500", "#ffc966", "#f67d3b", "#43e5fd", "#20a5e6", "#1F917A", "#8B572A",
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

  constructor(private _tableService: TableService) {}

  ngOnInit() {
    // console.log("child: ", this.child);
    this.data = this._tableService.getTableData();
    this.headers = this._tableService.getHeaders();
    this.buttonText = this._tableService.getButtonText();
  }

  buttonClickedHandler($event) {
    if ($event.context == "remove") {
      this.data = this.data
        .filter(d => d != $event.selected)
    } 

    if ($event.context == "add") {
      const index = this.data.findIndex( d => d === $event.selected)
      this.data.splice(index+1, 0, []); 
    }
  }

  styleUpdatedHandler($event) {
    if($event.type =="width") {
      this.width = $event.value;
      if (this.width > 1600) {
        this.width = 1600;
      }
    } 

    if($event.type =="height") {
      this.height = $event.value;
      if (this.width > 2600) {
        this.width = 2600;
      } 
    }

    if($event.type =="headerAlignment") {
      this.headerAlignment = $event.value;
    }

    if($event.type =="textAlignment") {
      this.textAlignment = $event.value;
    }

    if($event.type =="headerFontSize") {
      this.headerFontSize = $event.value;
    }

    if($event.type =="tableFontSize") {
      this.tableFontSize = $event.value;
    }

    if($event.type =="fontWeight") {
      this.fontWeight = $event.value;
    }
    
    if($event.type =="headerTxtColor") {
      this.headerTxtColor = $event.value;
    }

    if($event.type =="tableTxtColor") {
      this.tableTxtColor = $event.value;
    }

    if($event.type =="headerBGColor") {
      this.headerBGColor = $event.value;
    }

    if($event.type =="color") {
      this.color = $event.value;
    }

    if($event.type =="alternateColor") {
      this.alternateColor = $event.value;
    }

    if($event.type =="pageColor") {
      this.pageColor = $event.value;
    }
    
    if($event.type =="isDownloadable") {
      this.isDownloadable =! this.isDownloadable ;
    }
    
    if($event.type =="isVertical") {
      this.isVertical =! this.isVertical ;
    }

    if($event.type =="isDynamic") {
      this.isDynamic =! this.isDynamic ;
    }

    if($event.type =="contenteditable") {
      this.contenteditable =! this.contenteditable ;
    }
  }

  widthUpdatedHandler($event) {
    this.width = $event;
  }

  // edit height of the display section
  heightUpdatedHandler($event) {
    this.height = $event;
  }

  toggleVerticalUpdated($event) {
    this.isVertical = $event;
  }

  toggleColumnUpdated($event) {
    this.isDynamic = $event;
  }

  toggleEditableTable($event) {
    this.contenteditable = $event;
  }

  // ctrlElementHandler(d, ct): void {
  //   if (this.contenteditable === true) {
  //       let selected = d;
  //       let context = ct;

  //       if (context === "remove") {
  //           this.data = this.data
  //               .filter(d => d != selected)
  //       } 

  //       if (context === "add") {
  //           this.data.push([]); 
  //       }
  //   } 
  // }
}
