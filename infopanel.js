import { VEGLISTA } from "./adatok.js"
class Infopanel{
    #veg
    #adat
    constructor(){
    this.#veg = false;
    this.#adat = adat;
    function osszealit(OBJEKTUMLISTA) {
        let txt = "";
        for (let index = 0; index < VEGLISTA.length; index++) {
          txt += `<div class="card col-lg-5.5 col-md-3 col-sm-1.5 bg-info text-white text-center ${index}">
          <p>${VEGLISTA[index].gyozelem}</p>
          <p>${OBJEKTUMLISTA[index].ehhalal}</p>
          <div><button id="${index}" class="btn btn-primary info" data-toggle="modal" data-target="#myModal">Info</button>
          <button id="${index}" class="btn btn-primary kosar">Kosár</button></div></div>`;
          
        }
        txt += `<div class="modal" id="myModal">
        <div class="modal-dialog">
          <div class="modal-content">
      
            <!-- Modal Header -->
            <div class="modal-header bg-danger text-white text-center">
              <h4 class="modal-title">Info</h4>
              <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
      
            <!-- Modal body -->
            <div class="modal-body text-white bg-info">
            
            </div>
      
            <!-- Modal footer -->
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
            </div>
      
          </div>
        </div>
      </div>`
        return txt;
      }
    }
}
