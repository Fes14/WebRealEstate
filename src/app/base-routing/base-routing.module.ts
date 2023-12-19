import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "../app.component";
import {RealEstatePageComponent} from "../features/pages/real-estate-page/real-estate-page.component";
import {MainPageComponent} from "../features/pages/main-page/main-page.component";
import {RealEstateEditPageComponent} from "../features/pages/real-estate-edit-page/real-estate-edit-page.component";

const routes: Routes = [
  {
    path: 'real-estate',
    component: RealEstatePageComponent,
    children: [
      // {
      //   path: 'property-type/:code',
      //   component: PropertyTypeComponent
      // },
      // Дополнительные дочерние маршруты для типов недвижимости
      // {
      //   path: 'еще-один-тип/:code',
      //   component: AnotherPropertyTypeComponent
      // },
    ]
  },
  {
    path: 'main',
    component: MainPageComponent,
  },
  {
    path: 'real-estate/:id',
    component: RealEstateEditPageComponent
  },
  // Дополнительные главные маршруты, если необходимо
  // {
  //   path: 'еще-раздел',
  //   component: AnotherComponent
  // },
  {
    path: '**',
    redirectTo: 'main'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class BaseRoutingModule {


}
