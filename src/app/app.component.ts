import { Component, OnInit } from '@angular/core';
import { MapCustomService } from './map-custom.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private mapCustomService: MapCustomService) {}

  ngOnInit(): void {
    this.mapCustomService
      .buildMap()
      .then((data) => {
        console.log('Map built: ', data);
      })
      .catch((error) => {
        console.log('Error intializing map: ', error);
      });
  }
}
