import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { TestPipePipe } from './my-component/test-pipe.pipe';
import { HighlightDirective } from './my-component/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    TestPipePipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
