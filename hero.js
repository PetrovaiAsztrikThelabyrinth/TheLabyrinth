import JatekTer from "./JatekTer.js";

class Hero {
  #szuloElem;
  #texture;
  #id;
  #STATUSOK = [];
  constructor() {

    
  }
  statkiir(id, szuloElem, StatTexture) {
    this.stat(25);
    console.log(StatTexture);
    this.#szuloElem = szuloElem;
    this.#id = id;
    this.#texture = StatTexture;
    console.log("stat");
    this.#szuloElem.append(`
    <div class="statok" id="${this.#id}">
      <img src="${this.#texture}" alt="stat">
    </div>
    <div class="statok" id="${this.#id}">
    <p>${this.#STATUSOK[id]}</p>
  </div>
`);

  }


  stat(palyaMeret) {
    this.elet = 5;
    this.#STATUSOK.push(this.elet);

    this.stamina = palyaMeret * 0.4;
    this.#STATUSOK.push(this.stamina);
  }
}

export default Hero;
