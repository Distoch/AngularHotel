import { NgModule } from '@angular/core';
import {
   MatButtonModule,
   MatToolbarModule,
   MatIconModule,
   MatSidenavModule,
   MatListModule,
   MatTabsModule
   } from '@angular/material';
// Ce module servira a importé uniquement les composants material

@NgModule({
  imports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatSidenavModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatSidenavModule
  ]
})
export class MaterialModule {}
