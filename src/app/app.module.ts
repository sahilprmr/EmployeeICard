import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IcardComponent } from './icard/icard.component';
import { HttpClientModule }from '@angular/common/http';
import { AddemployeeComponent } from './ManageIcard/addemployee/addemployee.component';
import { EditemployeeComponent } from './ManageIcard/editemployee/editemployee.component';

@NgModule({
  declarations: [
    AppComponent,
    IcardComponent,
    AddemployeeComponent,
    EditemployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
