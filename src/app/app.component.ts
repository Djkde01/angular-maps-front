import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { MapCustomService } from './map-custom.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('asGeoCoder') asGeoCoder!: ElementRef;

  constructor(
    private mapCustomService: MapCustomService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.mapCustomService
      .buildMap()
      .then(({ map, geocoder }) => {
        // Add geocoder to asGeoCoder
        this.renderer.appendChild(
          this.asGeoCoder.nativeElement,
          geocoder.onAdd(map)
        );
      })
      .catch((error) => {
        console.log('Error intializing map: ', error);
      });
  }
}
