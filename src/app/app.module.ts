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
import { AddCommentComponent } from './component/partial/add-comment/add-comment.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CommentComponent,
    PublishComponent,
    ImagePipe,
    AddCommentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [InfoServicesService],
  bootstrap: [AppComponent],
  entryComponents: [
    AddCommentComponent
  ]
})
export class AppModule { }
