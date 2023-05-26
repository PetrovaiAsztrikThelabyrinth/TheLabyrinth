import JatekTer from "./JatekTer.js";

class Hero {
  #szuloElem;
  #texture;
  #id;
  constructor(palyaMeret) {
    
  }
  statkiir(szuloElem, StatTexture) {
    console.log(StatTexture);
    this.#szuloElem = szuloElem;
    this.#id = id;
    this.#texture = StatTexture;
    console.log("stat");
      szuloElem.append(`
      <div class="palya" id="${this.#id}">
        <img src="${StatTexture}" alt="stat">
      </div>
      <div class="palya" id="${this.#id}">
      <p>${}</p>
    </div>
  `);
  }

  herolocation() {}
  stat(palyaMeret) {
    this.elet = 5;
    this.stamina = Math.floor(Math.random() * (palyaMeret * 0.2)) + 1;
  }
  heroPozitcio() {

  }
}

export default Hero;
