import { Component, OnInit, Input, } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { BsModalRef, BsModalService } from 'ngx-bootstrap'
import { AddCommentComponent } from '../partial/add-comment/add-comment.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() data: User

  total: number = 0
  yellow: boolean
  blue: boolean
  red: boolean
  numComment: number = 0

  modalRef: BsModalRef
  
  constructor(
    private modalService: BsModalService
  ) { }

  ngOnInit() {

    for (const iterator of this.data.reactions) {
      this.total = 0
      this.total += iterator.number
      if(iterator.name === 'blue') {
        this.blue = true
      } else if(iterator.name === 'yellow') {
        this.yellow = true
      } else if(iterator.name === 'red') {
        this.red = true
      }
    }
    
    if( this.data.comments.length > 0) {
      this.numComment = this.data.comments.length
    }
  }

  reaction() {
    this.total++
  }

  addComment() {
    this.modalRef = this.modalService.show(AddCommentComponent)
    this.modalRef.content.onClose.subscribe(result => {
      console.log(result)
      this.data.comments.push(result)
      this.recountComment()
    })
  }

  recountComment() {
    if( this.data.comments.length > 0) {
      this.numComment = this.data.comments.length
    }
  }

  addedComment(variable: boolean) {
    if(variable) {
      this.recountComment()
    }
  }

}
