import { NgModule, TRANSLATIONS, TRANSLATIONS_FORMAT } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClientSideDataSource, NuiButtonModule, NuiRepeatModule, NuiSearchModule, NuiTableModule, RepeatItemComponent } from "@nova-ui/bits";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent_ } from './components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent_
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NuiTableModule,
    NuiButtonModule,
    NuiSearchModule,
    NuiRepeatModule
  ],
  providers: [
    {provide: TRANSLATIONS_FORMAT, useValue: "xlf"},
    ClientSideDataSource,
    {provide: TRANSLATIONS, useValue: ""},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
