import {Component, Input, OnInit} from '@angular/core';
import {RealEstateInfo} from "../../../models/real-estate-info";
import {Router} from "@angular/router";

@Component({
  selector: 'app-real-estate-detail',
  templateUrl: './real-estate-detail.component.html',
  styleUrls: ['./real-estate-detail.component.css']
})
export class RealEstateDetailComponent implements OnInit {

  @Input() realEstateItem?: RealEstateInfo

  constructor(private _router: Router) {
  }

  ngOnInit(): void {

  }

  showDetails() {
    this._router.navigate(['real-estate', this.realEstateItem?.id])
  }
}
