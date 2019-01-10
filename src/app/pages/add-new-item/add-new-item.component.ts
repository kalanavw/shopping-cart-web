import {Component, OnInit} from '@angular/core';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-add-new-item',
  templateUrl: './add-new-item.component.html',
  styleUrls: ['./add-new-item.component.css']
})
export class AddNewItemComponent implements OnInit {

  public item: any;

  constructor(private cartService: CartService) {
    this.item = {
      'itemName': '',
      'itemCategory': '-SELECT-',
      'costPrice': 0,
      'sellingPrice': 0
    };
  }

  ngOnInit() {

  }

  saveNewItem() {
    console.log(this.item);
    this.cartService.saveNewItem(this.item)
      .subscribe(() => {
        alert('new item successfully saved');
      });
  }
}
