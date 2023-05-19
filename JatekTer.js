import Tile from "./Tile.js";
class JatekTer {
#meret = 5
#palya = this.#meret*this.#meret;

constructor(){
    console.log("Jatekter");
    const ARTICLE = $(".border");
    for (let i = 0; i < this.#palya; i++) {
      const tile = new Tile(ARTICLE, i);
    }
}
}
export default JatekTer