import Tile from "./Tile.js";
import Hero from "./hero.js";
import { TILE, STAT } from "./adatok.js";
class JatekTer {
  #meret = 5;
  #palyaMeret = this.#meret * this.#meret;
  #lista = [];
  #STATLISTA = [];

  constructor() {
    const hos = new Hero(this.#palyaMeret);
    const ARTICLE = $(".border");
    const ASIDE = $(".Hstat");
    hos.herolocation();
    this.#STATLISTA=STAT;
    console.log(this.#STATLISTA);
    this.listaTolt();
    for (let j = 0; j < 2; j++) {
      const HERO = new Hero;
      HERO.statkiir(j, ASIDE,this.#STATLISTA[j])
    }
    for (let i = 0; i < this.#palyaMeret; i++) {
      let tiletextures = this.tiletexture();
      const tile = new Tile(ARTICLE, i, TILE[tiletextures]);
    }
  }
  tiletexture() {
    return Math.floor(Math.random() * 3);
  }
  listaTolt() {
    let i = 0;
    while (i < this.#palyaMeret) {
      this.#lista.push("");
      i++;
    }

    i = Math.floor(Math.random() * this.#meret);
    this.#lista[i] = "H";

    i = Math.floor(Math.random() * this.#meret + this.#palyaMeret - this.#meret);
    this.#lista[i] = "V";
    console.log(this.#lista);
  }

  stat(palyaMeret) {
    this.elet = 5;
    this.stamina = Math.floor(Math.random() * (palyaMeret * 0.2)) + 1;
  }
}
export default JatekTer;
