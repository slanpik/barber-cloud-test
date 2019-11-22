import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class InfoServicesService {

  apiUrl: string
  header: any

  constructor(private http: HttpClient) {
    this.apiUrl = environment.urlServer
    this.header = new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  getInfo() {
    const headers = this.header
    return this.http.get(this.apiUrl, { headers }).pipe(
      map((res: Response) => res))
  }

}
