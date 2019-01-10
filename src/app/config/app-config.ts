import {Injectable} from '@angular/core';

@Injectable()
export class AppConfig {

  private readonly _baseUrl: string;

  private readonly _findAllItems: string;
  private readonly _saveNewItem: string;

  constructor() {
    this._baseUrl = 'http://127.0.0.1:9000/';

    this._findAllItems = 'items';
    this._saveNewItem = 'items';
  }

  get baseUrl(): string {
    return this._baseUrl;
  }

  get findAllItems(): string {
    return this._findAllItems;
  }

  get saveNewItem(): string {
    return this._saveNewItem;
  }
}
