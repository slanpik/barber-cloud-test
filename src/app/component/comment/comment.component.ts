import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Comment } from 'src/app/interfaces/comment';
import * as moment from 'moment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
  
  @Input() comments: Comment[]
  @Output() public addComment: EventEmitter<boolean> = new EventEmitter<boolean>()
  
  commentNew: string = ""

  constructor() { }

  saveComment() {
    if( this.commentNew.length == 0 ) {
      return
    }
    const comment: any = {
        text: this.commentNew,
        date: moment().fromNow(),
        user: {
          name: 'Francisco Sanchez',
          image: ''
      }
    }
    this.commentNew = ''
    this.comments.push(comment)
    this.addComment.emit(true)
  }
}
