import { Component } from '@angular/core';
import { InfoServicesService } from './services/info-services.service';
import { User } from './interfaces/user';
import { Comment } from './interfaces/comment';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'barberCloudTest';
  datas: User[] = []
  constructor( private infoServices: InfoServicesService) {
    this.getInfo()
  }

  getInfo() {
    this.infoServices.getInfo().subscribe( (res: any) => {
      for (let iterator of res) {
        iterator.date = this.getTimeFromTimestamp(iterator.date)
        for( let i = 0; i < iterator.comments.length; i++) {
          iterator.comments[i].date = this.getTimeFromTimestamp(iterator.comments[i].date)
        }
        this.datas.push(iterator)
      }
      console.log(this.datas)
      // this.datas = res
    })
  }

  sendPublish(publish: User) {
    const user = {
      user: publish
    }
    this.datas.push(publish)
  }

  getTimeFromTimestamp( date ) {
    return moment.unix(date).fromNow()
  }

}
