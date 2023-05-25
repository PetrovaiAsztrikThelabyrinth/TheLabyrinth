import JatekTer from "./JatekTer.js";

class Hero{
    constructor(){
        stat(palya);
    }

}
function stat(palya){
  let elet =  5;
  let stamina = Math.floor(Math.random() * (palya%20)) + 1;
}
function keyPressed(){
    if (keyCode === LEFT_ARROW){
      x-= 10
    }
    if (keyCode === UP_ARROW){
      y-= 10
    }
    if (keyCode === RIGHT_ARROW){
      x-= -10
    }
    if (keyCode === DOWN_ARROW){
      y-= -10
    }
}
export default Hero;