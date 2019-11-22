import { Component } from '@angular/core';
import { InfoServicesService } from './services/info-services.service';
import { User } from './interfaces/user';
import { Comment } from './interfaces/comment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'barberCloudTest';
  datas: User[]
  constructor( private infoServices: InfoServicesService) {
    this.getInfo()
  }

  getInfo() {
    this.infoServices.getInfo().subscribe( (res: any) => {
      this.datas = res
      console.log(this.datas)
    })
  }

  sendPublish(publish: User) {
    console.log(publish)
    const user = {
      user: publish
    }
    console.log(user)
    this.datas.push(publish)
    console.log(this.datas)
  }

}
