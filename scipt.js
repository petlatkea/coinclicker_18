window.addEventListener("load", sidenVises);

let point = 0;
let liv = 3;

function sidenVises() {
  console.log("siden vises");
  startGame();
}

function startGame() {
  console.log("start game");

  // nulstil point og liv
  point = 0;
  liv = 3;

  // placer elementer på tilfældige placeringer
  document.querySelector("#coin0").classList.add("position1");
  document.querySelector("#coin1").classList.add("position2");
  document.querySelector("#coin2").classList.add("position3");
  document.querySelector("#coin3").classList.add("position5");

  document.querySelector("#bomb").classList.add("position5");

  document.querySelector("#diamond").classList.add("position4");

  // tilføj falling på coin0,1,2,3 diamond, og bomb
  document.querySelector("#coin0").classList.add("falling");
  document.querySelector("#coin1").classList.add("falling");
  document.querySelector("#coin2").classList.add("falling");
  document.querySelector("#coin3").classList.add("falling");

  document.querySelector("#bomb").classList.add("falling");

  document.querySelector("#diamond").classList.add("falling");

  // så er der klasser på ... nu skal vi kunne klikke
  document.querySelector("#coin0").addEventListener("mousedown", clickCoin);
  document.querySelector("#coin1").addEventListener("mousedown", clickCoin);
  document.querySelector("#coin2").addEventListener("mousedown", clickCoin);
  document.querySelector("#coin3").addEventListener("mousedown", clickCoin);
  document.querySelector("#diamond").addEventListener("mousedown", clickDiamond);
  document.querySelector("#bomb").addEventListener("mousedown", clickBomb);

  // når de har nået bunden skal de starte forfra
  document.querySelector("#coin0").addEventListener("animationiteration", hitBottom);
  document.querySelector("#coin1").addEventListener("animationiteration", hitBottom);
  document.querySelector("#coin2").addEventListener("animationiteration", hitBottom);
  document.querySelector("#coin3").addEventListener("animationiteration", hitBottom);
  document.querySelector("#diamond").addEventListener("animationiteration", hitBottom);
  document.querySelector("#bomb").addEventListener("animationiteration", hitBottom);

}

function hitBottom() {
  // remove previous position
  this.classList.remove("position0");
  this.classList.remove("position1");
  this.classList.remove("position2");
  this.classList.remove("position3");
  this.classList.remove("position4");
  this.classList.remove("position5");
  this.classList.remove("position6");

  // get random number between 0 and 6
  const number = Math.floor(Math.random()*7);

  this.classList.add("position"+number);
}


function clickCoin() {
  console.log("click coin");

  this.removeEventListener("mousedown", clickCoin);

  // når der er klikket på mønten skal den forsvinde
  // først skal den pause
  this.classList.add("paused");
  this.querySelector(".coin_sprite").classList.add("dissappear");
  // når den er forsvundet, skal den dukke op igen
  this.addEventListener("animationend", coinGone);
}

function coinGone() {
  this.classList.remove("paused");
  this.querySelector(".coin_sprite").classList.remove("dissappear");
  // giv point
  givePoint();
  // start flytte-animationen forfra
  this.classList.remove("falling");
  this.offsetHeight;
  this.classList.add("falling");
  // gør så man kan klikke på mønten igen
  this.addEventListener("mousedown", clickCoin);
}

function clickDiamond() {
  console.log("click diamond");
}

function clickBomb() {
  console.log("click bomb");
  document.querySelector("#bomb").removeEventListener("mousedown", clickBomb);
  // når der er klikket på bomben skal den eksplodere
  document.querySelector("#bomb").classList.add("explode");
  document.querySelector("#bomb").addEventListener("animationend", exploded);
  // og skærmen skal ryste
  document.querySelector("#game_elements").classList.add("shake");
}

function exploded() {
  console.log("explosion over");
  document.querySelector("#bomb").classList.remove("explode");
  document.querySelector("#game_elements").classList.remove("shake");

  // TODO: mist et liv
  loseLife();

  document.querySelector("#bomb").addEventListener("mousedown", clickBomb);
}

function givePoint() {
  // add 1 point
  point++;

  // show points
  document.querySelector("#points .antal").innerHTML = point;
}

function loseLife() {
  liv--;

  // TODO: Vis liv

  console.log("liv: " + liv);

  // TODO: Game over!
}
