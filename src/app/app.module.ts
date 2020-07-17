import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { DataTableComponent } from './components/data-table/data-table.component';
import { UserListComponent } from './components/user-list/user-list.component';

@NgModule({
  declarations: [
  DataTableComponent,
  UserListComponent,  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
