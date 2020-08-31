import User from "./User";
import Comapany from "./Company";
import Map from "./Map";

const user = new User();
const company = new Comapany();
const map = new Map("map");

map.addMarker(user);
map.addMarker(company);
