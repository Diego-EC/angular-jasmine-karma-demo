import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from 'src/app/shop/infrastructure/ng-components/items/items.component'

const routes: Routes = [
    { path: 'shop', component: ItemsComponent },
    { path: '',   redirectTo: '/shop', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
