class Tile {
  #id;
  #szuloElem;

  constructor(szuloElem, id) {
    this.#szuloElem = szuloElem;
    this.#id = id;
    console.log("Tile");
    szuloElem.append(`
          <div>
              
          </div>
      `);
  }
}
