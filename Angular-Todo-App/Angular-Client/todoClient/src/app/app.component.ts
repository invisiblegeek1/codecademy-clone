import { Component } from '@angular/core';
import { ItemService } from './item.service';
import "bootstrap";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoClient';
  items: Array<any>=[];
  private itemsService:ItemService;
  constructor(itemserService: ItemService) {
    this.itemsService = itemserService;
  }
  ngOnInit() {
    this.items = this.itemsService.getItems();
  }


  
}
