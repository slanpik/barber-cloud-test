import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap'
import { Subject } from 'rxjs'
import { FormGroup, Validators, FormControl } from '@angular/forms'
import * as moment from 'moment';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {
  public onClose: Subject<any>
  commentNew: string = ""
  modalRef: BsModalRef;
  
  constructor(private bsModalRef: BsModalRef) { }

  public ngOnInit(): void {
      this.onClose = new Subject()
  }

  public onSubmit() {
		this.onClose.next(true)
		this.bsModalRef.hide()
  }

  public onCancel(): void {
		this.onClose.next(false)
		this.bsModalRef.hide()
  }


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

    this.onClose.next(comment)
    this.bsModalRef.hide()
  }

}
