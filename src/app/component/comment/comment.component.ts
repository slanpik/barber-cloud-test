import { Component, Input } from '@angular/core';
import { Comment } from 'src/app/interfaces/comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
  
  @Input() comments: Comment[]
  commentNew: string = ""

  constructor() { }

  saveComment() {
    if( this.commentNew.length == 0 ) {
      return
    }
    const comment: any = {
        text: this.commentNew,
        date: new Date(),
        user: {
          name: 'Francisco Sanchez',
          image: ''
      }
    }
    this.commentNew = ''
    this.comments.push(comment)
  }
}
