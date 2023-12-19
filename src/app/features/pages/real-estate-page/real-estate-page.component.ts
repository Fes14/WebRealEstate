import {Component, OnInit} from '@angular/core';
import {RealEstateType} from "../../models/real-estate-type";
import {MatTableDataSource} from "@angular/material/table";
import {RestService} from "../../../core/rest.service";
import {RealEstateCreateComponent} from "./real-estate-create/real-estate-create.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-real-estate-page',
  templateUrl: './real-estate-page.component.html',
  styleUrls: ['./real-estate-page.component.css']
})
export class RealEstatePageComponent implements OnInit {

  iSidenavBig: boolean = true
  realEstateTypes: Array<RealEstateType> = [{name: 'Коммерческая недвижимость', id: 0}];
  displayedCols: string[] = []
  public dataSource: MatTableDataSource<any> = new MatTableDataSource<any>()
  tableMode: boolean = false

  constructor(private _restService: RestService, public _dialog: MatDialog,) {
    this.getRealStates()
  }

  ngOnInit(): void {


  }

  getRealStates() {
    this._restService.getRealEstates().subscribe(x => {
      this.dataSource.data = x
      if (this.dataSource.data.length > 0) {
        this.displayedCols = Object.keys(this.dataSource.data[0])
      }
    })
  }

  getDetails(row: any) {

  }

  add() {
    let dialogRef = this._dialog.open(RealEstateCreateComponent, {
      width: '500px',
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      if (!result) {
        return;
      }
      this._restService.addRealEstate(result).subscribe(() => {
        this.getRealStates();
      });
    });
  }
}
