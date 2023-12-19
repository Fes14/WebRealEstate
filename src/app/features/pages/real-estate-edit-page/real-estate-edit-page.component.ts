import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {RestService} from "../../../core/rest.service";
import {RealEstateInfo} from "../../models/real-estate-info";
import {Developer} from "../../models/developer";
import {RealEstateType} from "../../models/real-estate-type";

@Component({
  selector: 'app-real-estate-edit-page',
  templateUrl: './real-estate-edit-page.component.html',
  styleUrls: ['./real-estate-edit-page.component.css']
})
export class RealEstateEditPageComponent implements OnInit, AfterViewInit {

  form: UntypedFormGroup = new UntypedFormGroup({});
  types: RealEstateType[] = []
  developers: Developer[] = []


  constructor(private _fb: UntypedFormBuilder, private _activatedRoute: ActivatedRoute, private _restService: RestService) {
    this.form = this._fb.group({
      name: ['', [Validators.required]],
      type: ['', [Validators.required]],
      square: ['', [Validators.required]],
      price: ['', [Validators.required]],
      description: ['', [Validators.required]],
      roomsCount: ['', [Validators.required]],
      developer: ['', [Validators.required]],
      address: this._fb.group({
        city: ['', Validators.required],
        street: ['', Validators.required],
        house: ['', Validators.required],
        metroStation: ['']
      })
    });
  }

  ngOnInit(): void {
    this._restService.getDevelopers().subscribe(x => {
      this.developers = x
    })
    this._restService.getRealEstateTypes().subscribe(x => {
      this.types = x
    })
  }

  ngAfterViewInit(): void {
    this._activatedRoute.params.subscribe(p => {
      if (p['id']) {
        this._restService.getRealEstate(p['id']).subscribe((x: RealEstateInfo) => {

          this.form = this._fb.group({
            id:[x.id, [Validators.required]],
            name: [x.name, [Validators.required]],
            type: [x.type, [Validators.required]],
            square: [x.square, [Validators.required]],
            price: [x.price, [Validators.required]],
            description: [x.description, [Validators.required]],
            roomsCount: [x.roomsCount, [Validators.required]],
            developer: [x.developer, [Validators.required]],
            address: this._fb.group({
              city: [x.address?.city, Validators.required],
              street: [x.address?.street, Validators.required],
              house: [x.address?.house, Validators.required],
              metroStation: [x.address?.metroStation]
            })
          });
        })
      }
    })
  }

  save() {

    let model:RealEstateInfo=this.form.value
    this._restService.updateRealEstate(this.form.value).subscribe(() => {

    });
  }
}
