import Tile from "./Tile.js";
class JatekTer {
#meret = 5
#palya = this.#meret*this.#meret;

constructor(){
    console.log("Jatekter");
    const ARTICLE = $("article");
    ARTICLE.append(`<div>`);
    for (let i = 0; i < this.#palya; i++) {
      const tile = new Tile(ARTICLE, i);
    }
    ARTICLE.append(`</div>`);
}
}
export default JatekTer