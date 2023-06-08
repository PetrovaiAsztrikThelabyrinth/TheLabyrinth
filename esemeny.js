import { VEGLISTA } from "./adatok.js"
import Hero from "./hero.js"
import JatekTer from "./JatekTer.js"
import veg from "./JatekTer.js"
import Infopanel from "./infopanel.js"

function Esemeny(heroosztaly, vegosztaly){
    
    
    const MODELID = $("#myModal .modal-content");
   if(heroosztaly.css(left)===vegosztaly.css(left) && heroosztaly.css(top)===vegosztaly.css(top)){
    const info = new Infopanel();
    MODELID.html(info.osszealit());
   }
}
export default Esemeneny
