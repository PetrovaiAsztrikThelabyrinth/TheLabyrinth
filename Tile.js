class Tile {
  #id;
  #szuloElem;
  #texture;

  constructor(szuloElem, id, tiletexture) {
    console.log(tiletexture);
    this.#szuloElem = szuloElem;

    this.#id = id;
    this.#texture = tiletexture;
    console.log("Tile");
    if(tiletexture == "kepek/hero.png"){szuloElem.append(`
    <div class="palya hero" id="${this.#id}">
      <img src="${tiletexture}" alt="tile">
    </div>
`);}
else{
  szuloElem.append(`
    <div class="palya" id="${this.#id}">
      <img src="${tiletexture}" alt="tile">
    </div>
`);
}
    
  }
}
export default Tile
