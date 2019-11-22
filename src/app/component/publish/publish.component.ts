import { Component, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.scss']
})
export class PublishComponent {

  publish: string = ''
  @Output() public sendPublish:EventEmitter<User> = new EventEmitter<User>()

  constructor() { }

  /**
   * Function to get the new publish
   */
  publishComment() {
    if( this.publish.length == 0 ) {
      return
    }
    const user: User = {
      text: this.publish,
      date: new Date(),
      user: {
        name: 'Francisco Sanchez',
        image: ''
      },
      reactions: [
        
        {
          id: 1,
          name: "blue",
          number: 0
        },
        {
          id: 2,
          name: "yellow",
          number: 0
        },
        {
          id: 3,
          name: "red",
          number: 0
       }
      ],
      comments: []
      
    }
    console.log('hey')
    this.sendPublishData(user)
    this.publish = ''
  }

  /**
   * Function to send the publish to the parent component
   * @param publishTmp 
   */
  sendPublishData( publishTmp: any ) {
    // this.sendPublish = publishTmp
    this.sendPublish.emit(publishTmp)
  }
}
