import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TopPanelComponent } from './top-panel/top-panel.component';
import { ResultComponent } from './result/result.component'
import { RestApi } from './shared/rest-api.service';
import { HttpClientModule } from '@angular/common/http';
import { OrderByPipe } from './shared/order-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TopPanelComponent,
    ResultComponent,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [RestApi],
  bootstrap: [AppComponent]
})
export class AppModule { }
