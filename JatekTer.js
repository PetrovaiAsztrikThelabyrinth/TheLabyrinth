import Tile from "./Tile.js";
import Hero from "./Hero.js";
import { TILE, STAT } from "./adatok.js";
class JatekTer {
  #meret = 5;
  #palyaMeret = this.#meret * this.#meret;
  #lista = [];
  #STATLISTA = [];

  constructor() {
    const hos = new Hero(this.#palyaMeret);
    const ARTICLE = $("article");
    const ASIDE = $(".Hstat");
    this.#STATLISTA=STAT;
    console.log(this.#STATLISTA);
    this.listaTolt();

    let x = 0;
    let y = 0;

    for (let j = 0; j < 2; j++) {
      const HERO = new Hero;
      HERO.statkiir(j, ASIDE,this.#STATLISTA[j])
    }
    ARTICLE.append(`<div class="myImage"><img src="kepek/hero.png"></div>`)
    ARTICLE.append(`<div class="vegImage"><img src="kepek/vegpont.png"></div>`)
    ARTICLE.append(`<div class="border"></div>`)
    const BORDER = $(".border")
    const myImage = $(".myImage img");
    for (let i = 0; i < this.#palyaMeret; i++) {
      let tiletextures = this.tiletexture();
      const tile = new Tile(BORDER, i, TILE[tiletextures]);
    }

    function movement() {
      if(y<0){y=0}
      if(y>300){y=300}
      if(x<-150){x=-150}
      if(x>150){x=150}
      myImage.css({ transform: `translateX(${x}px) translateY(${y}px)`})
      
    }

    $(document).keydown(function (event){
      if (event.code==="ArrowUp"){
        y-=75 ;
      } else if (event.code==="ArrowDown"){
        y+=75
      } else if (event.code==="ArrowLeft"){
        x-=75
      } else if (event.code==="ArrowRight"){
        x+=75
      }
      movement();
    })
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
