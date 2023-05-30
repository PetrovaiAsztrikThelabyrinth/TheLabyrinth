import JatekTer from "./JatekTer.js";

class Hero {
  #szuloElem;
  #texture;
  #id;
  #statusok = [];
  constructor() {
    
  }
  statkiir(id, szuloElem, StatTexture) {
    this.stat(25);
    console.log(StatTexture);
    this.#szuloElem = szuloElem;
    this.#id = id;
    this.#texture = StatTexture;
    console.log("stat");
    szuloElem.append(`
    <div class="statok" id="${this.#id}">
      <img src="${StatTexture}" alt="stat">
    </div>
    <div class="statok" id="${this.#id}">
    <p>${this.#statusok[id]}</p>
  </div>
`);
  }

  herolocation() {}
  stat(palyaMeret) {
    this.elet = 5;
    this.#statusok.push(this.elet)
    
    this.stamina = palyaMeret * 0.4;
    this.#statusok.push(this.stamina)
  }
  heroPozitcio() {}
}

export default Hero;
