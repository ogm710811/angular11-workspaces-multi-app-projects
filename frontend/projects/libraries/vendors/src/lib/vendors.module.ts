import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { VendorsComponent } from './vendors.component';



@NgModule({
  declarations: [VendorsComponent],
  imports: [
    MatButtonModule
  ],
  exports: [
    MatButtonModule,
    VendorsComponent]
})
export class VendorsModule { }
