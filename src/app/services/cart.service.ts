import {Injectable} from '@angular/core';
import {HttpService} from '../config/http.service';
import {AppConfig} from '../config/app-config';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpService, private app: AppConfig) {
  }

  findAllItems() {
    const url = this.app.baseUrl + this.app.findAllItems;
    return this.http.httpGet(url);
  }

  saveNewItem(item: any) {
    const url = this.app.baseUrl + this.app.saveNewItem;
    return this.http.httpPost(url, item);
  }
}
