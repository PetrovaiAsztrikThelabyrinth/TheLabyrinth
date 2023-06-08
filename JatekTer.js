import Tile from "./Tile.js";
import Hero from "./hero.js";
import { TILE, STAT } from "./adatok.js";
import Infopanel from "./infopanel.js";

class JatekTer {
  #meret = 5;
  #palyaMeret = this.#meret * this.#meret;
  #STATLISTA = [];

  constructor() {
    const hos = new Hero(this.#palyaMeret);
    const ARTICLE = $("article");
    const ASIDE = $(".Hstat");
   
    this.#STATLISTA = STAT;
    console.log(this.#STATLISTA);

    this.x = 0;
    this.y = 0;

    for (let j = 0; j < 2; j++) {
      const HERO = new Hero();
      HERO.statkiir(j, ASIDE, this.#STATLISTA[j]);
    }
    ARTICLE.append(`<div class="myImage"><img src="./kepek/hero.png"></div>`);
    ARTICLE.append(`<div class="vegImage"><img src="./kepek/vegpont.png"></div>`);
    ARTICLE.append(`<div class="border"></div>`);
    const BORDER = $(".border");
    this.myImage = $(".myImage img");
    this.vegImage = $(".vegImage img");
    for (let i = 0; i < this.#palyaMeret; i++) {
      let tiletextures = this.tiletexture();
      const tile = new Tile(BORDER, i, TILE[tiletextures]);
    }

    $(window).keydown((event) => {
      if (event.code === "ArrowUp") {
        this.y -= 75;
      } else if (event.code === "ArrowDown") {
        this.y += 75;
      } else if (event.code === "ArrowLeft") {
        this.x -= 75;
      } else if (event.code === "ArrowRight") {
        this.x += 75;
      }
      console.log(this.x, this.y);
      this.movement(ARTICLE);
    });
  }

  movement(ARTICLE) {
    if (this.x == 0 && this.y == 300) {
      this.esemeny(ARTICLE);
    }
    if (this.y < 0) {
      this.y = 0;
    }
    if (this.y > 300) {
      this.y = 300;
    }
    if (this.x < -150) {
      this.x = -150;
    }
    if (this.x > 150) {
      this.x = 150;
    }
    this.myImage.css({
      transform: `translateX(${this.x}px) translateY(${this.y}px)`,
    });
  }

  esemeny(ARTICLE) {
    const info = new Infopanel();
    ARTICLE.append(info.osszealit());
    const RELOAD =$(".reload")
    $(RELOAD).on("click", ()=>{
      location.replace(location.href);
    })
  
  }

  tiletexture() {
    return Math.floor(
      Math.random() * 3);
  }

}
export default JatekTer;
