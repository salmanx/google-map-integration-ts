import faker from "faker";
import { Mappable } from "./Map";

export default class Company implements Mappable {
  copanyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.copanyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  marrkerContent(): string {
    return `
      <h3>Company name: ${this.copanyName}</h3>
      <b>CatchPhrase: ${this.catchPhrase}</b>
    `;
  }
}
