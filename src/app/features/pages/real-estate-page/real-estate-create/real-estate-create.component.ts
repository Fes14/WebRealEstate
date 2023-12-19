import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {RestService} from "../../../../core/rest.service";
import {RealEstateType} from "../../../models/real-estate-type";
import {Developer} from "../../../models/developer";
import {RealEstateInfo} from "../../../models/real-estate-info";

@Component({
  selector: 'app-real-estate-create',
  templateUrl: './real-estate-create.component.html',
  styleUrls: ['./real-estate-create.component.css']
})
export class RealEstateCreateComponent implements OnInit {

  form: UntypedFormGroup = new UntypedFormGroup({});
  types: RealEstateType[] = []
  developers: Developer[] = []

  constructor(private _fb: UntypedFormBuilder, private _restService: RestService,
              public dialogRef: MatDialogRef<RealEstateCreateComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
  ) {

    this.form = this._fb.group({
      name:['', [Validators.required]],
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

  save() {
    let model: RealEstateInfo = this.form.value
    this.dialogRef.close(model)
  }
}
