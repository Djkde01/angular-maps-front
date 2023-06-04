import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MapCustomService {
  mapbox = mapboxgl as typeof mapboxgl;
  map!: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 4.676376880660208;
  lng = -74.04846429783252;
  zoom = 12;

  constructor() {
    this.mapbox.accessToken = environment.mapboxPublicAccessToken;
  }

  buildMap(): Promise<any> {
    // Build map
    return new Promise((resolve, reject) => {
      try {
        this.map = new mapboxgl.Map({
          container: 'map',
          style: this.style,
          zoom: this.zoom,
          center: [this.lng, this.lat],
        });
        resolve({ map: this.map });
      } catch (error) {
        reject(error);
      }
    });
  }
}
