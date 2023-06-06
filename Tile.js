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
    this.#szuloElem.append(`
    <div class="palya" id="${this.#id}">
      <img src="${this.#texture}" alt="tile">
    </div>
`);
  }
}
export default Tile;
