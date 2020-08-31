import User from "./User";
import Comapny from "./Company";

export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  marrkerContent(): string;
}

export default class Map {
  private googleMap: google.maps.Map;

  constructor(divID: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divID), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    const infoWindow = new google.maps.InfoWindow({
      content: mappable.marrkerContent(),
    });

    marker.addListener("click", () => {
      infoWindow.open(this.googleMap, marker);
    });
  }
}
