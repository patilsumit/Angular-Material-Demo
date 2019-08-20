import { NgModule } from '@angular/core';
import {MatButtonModule, MatListModule, MatDividerModule, MatGridListModule,
   MatExpansionModule, MatFormFieldModule, MatDatepickerModule,
    MatNativeDateModule, MatInputModule, MatCardModule, MatTabsModule, MatStepperModule, MatSelectModule, MatAutocompleteModule, MatCheckboxModule, MatRadioModule, MatTooltipModule, MatSnackBarModule, MatDialogModule, MatTableModule, MatPaginatorModule, MatSortModule} from '@angular/material';
import {MatButtonToggleModule} from '@angular/material/button-toggle'
import {MatIconModule} from '@angular/material/icon';
import {
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatToolbarModule, 
  MatSidenavModule,
MatMenuModule } from '@angular/material';  

const MaterialComponents=[ 
   MatButtonModule, 
   MatButtonToggleModule,
   MatIconModule,
   MatBadgeModule,
   MatProgressSpinnerModule,
   MatToolbarModule,
   MatSidenavModule,
   MatMenuModule,
   MatListModule,
   MatDividerModule,
   MatGridListModule,
   MatExpansionModule,
   MatFormFieldModule,
   MatDatepickerModule,
   MatNativeDateModule,
   MatInputModule,
   MatCardModule,
   MatTabsModule,
   MatStepperModule,
   MatSelectModule,
   MatAutocompleteModule,
   MatCheckboxModule,
   MatRadioModule,
   MatTooltipModule,
   MatSnackBarModule,
   MatDialogModule,
   MatTableModule,MatPaginatorModule,MatSortModule
];

@NgModule({
  
  imports:[MaterialComponents],
  exports:[MaterialComponents]  
}) 
export class MaterialModule { } 
