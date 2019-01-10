import {Component, OnInit} from '@angular/core';
import {CartService} from '../../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public allItems: any;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.findAllItems();
  }

  private findAllItems() {
    this.cartService.findAllItems()
      .subscribe(res => {
        this.allItems = res;
      });
  }

}
