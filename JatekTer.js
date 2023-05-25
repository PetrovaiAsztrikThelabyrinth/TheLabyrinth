import Tile from "./Tile.js";
import Hero from "./hero.js";
import { TILE } from "./adatok.js";
class JatekTer {
  #meret = 5;
  #palya = this.#meret * this.#meret;
  constructor() {
    const hos = new Hero(this.#palya);
    console.log("Jatekter");
    const ARTICLE = $(".border");
    let hero = this.herolocation();
    let veg = this.veglocation();
    for (let i = 0; i < this.#palya; i++) {
      let tiletextures = this.tiletexture();
      const tile = new Tile(ARTICLE, i, TILE[tiletextures]);
    }
  }
  tiletexture() {
    return Math.floor(Math.random() * 3);
  }
}
export default JatekTer;
