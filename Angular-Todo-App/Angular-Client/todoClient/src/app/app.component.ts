import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todoClient';

  items=[
    {
      title:"laptop",
      price:2000,
      imageUrl:"assets/opencart.svg",

    },
    {
      title:"mobile",
      price:3000,
      imageUrl:"assets/opencart.svg",

    },
    {
      title:"ipod",
      price:1000,
      imageUrl:"assets/opencart.svg",

    },
    {
      title:"pendrive",
      price:1000,
      imageUrl:"assets/opencart.svg",

    }
  ]
}
