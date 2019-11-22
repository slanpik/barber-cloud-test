import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './component/card/card.component';
import { CommentComponent } from './component/comment/comment.component';
import { PublishComponent } from './component/publish/publish.component';

import { InfoServicesService } from './services/info-services.service';

import { ImagePipe } from './pipes/image.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CommentComponent,
    PublishComponent,
    ImagePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [InfoServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
