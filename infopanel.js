import { VEGLISTA } from "./adatok.js"
class Infopanel{
    constructor(){
      this.osszealit();
    }

    osszealit() {
      let txt = `<div class="card col-lg-5.5 col-md-3 col-sm-1.5 bg-info text-white text-center">
    <div class="modal" id="myModal">
    <div class="modal-dialog">
      <div class="modal-content">
  
        <!-- Modal Header -->
        <div class="modal-header bg-danger text-white text-center">
          <h4 class="modal-title">Vége</h4>
        </div>
  
        <!-- Modal body -->
        <div class="modal-body text-white bg-info">
        <p>${VEGLISTA[0]}</p>
        </div>
  
        <!-- Modal footer -->
        <div class="modal-footer">
          <button type="button" class="reload btn btn-danger" data-dismiss="modal">Újra</button>
        </div>
  
      </div>
    </div>
  </div>`
   return txt; 
  }
}
export default Infopanel;
