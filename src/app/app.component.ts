import {Component} from '@angular/core';
import {RealEstateType} from "./features/models/real-estate-type";
import {PreloaderService} from "./core/preloader.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RealEstates';
  isLoading: boolean = false

  constructor(private _preloaderService: PreloaderService) {
    _preloaderService.loaderState.subscribe(x => {
      this.isLoading = x
    })
  }
}
