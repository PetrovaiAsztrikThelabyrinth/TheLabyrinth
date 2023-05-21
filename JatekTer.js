import Tile from "./Tile.js";
import { TILE } from "./adatok.js";
class JatekTer {
#meret = 10; 
#palya = this.#meret*this.#meret;
constructor(){
    console.log("Jatekter");
    const ARTICLE = $(".border");
    for (let i = 0; i < this.#palya; i++) {
      let tiletextures = this.tiletexture();
      const tile = new Tile(ARTICLE, i, TILE[tiletextures]);
    }
}
tiletexture(){
 return Math.floor(Math.random() * 3);
}
}
export default JatekTer