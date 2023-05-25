import { VEGLISTA } from "./adatok.js"
import Hero from "./hero.js"
import veg from "./JatekTer.js"

function Esemeny(){
    if(Hero.hero("id") == veg.veg("id")){
        return VEGLISTA.gyozelem;
    }
}
export default Esemeneny
