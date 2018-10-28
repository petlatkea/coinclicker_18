window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("siden vises");
  startGame();
}

function startGame() {
  console.log("start game");

  // tilføj falling på coin0,1,2,3 diamond, og bomb
  document.querySelector("#coin0").classList.add("falling");
  document.querySelector("#coin1").classList.add("falling");
  document.querySelector("#coin2").classList.add("falling");
  document.querySelector("#coin3").classList.add("falling");

  document.querySelector("#bomb").classList.add("falling");

  document.querySelector("#diamond").classList.add("falling");

  // så er der klasser på ... nu skal vi kunne klikke
  document.querySelector("#coin0").addEventListener("click", clickCoin);
  document.querySelector("#diamond").addEventListener("click", clickDiamond);
  document.querySelector("#bomb").addEventListener("click", clickBomb);
}

function clickCoin() {
  console.log("click coin");

  document.querySelector("#coin0").removeEventListener("click", clickCoin);

  // når der er klikket på mønten skal den forsvinde
  // først skal den pause
  document.querySelector("#coin0").classList.add("paused");
  document.querySelector("#coin0 .coin_sprite").classList.add("dissappear");
  // når den er forsvundet, skal den dukke op igen
  document.querySelector("#coin0").addEventListener("animationend", coinGone);
}

function coinGone() {
  document.querySelector("#coin0").classList.remove("paused");
  document.querySelector("#coin0 .coin_sprite").classList.remove("dissappear");
  // start flytte-animationen forfra
  document.querySelector("#coin0").classList.remove("falling");
  document.querySelector("#coin0").offsetHeight;
  document.querySelector("#coin0").classList.add("falling");
  // gør så man kan klikke på mønten igen
  document.querySelector("#coin0").addEventListener("click", clickCoin);
}

function clickDiamond() {
  console.log("click diamond");
}

function clickBomb() {
  console.log("click bomb");
  document.querySelector("#bomb").removeEventListener("click", clickBomb);
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

  document.querySelector("#bomb").addEventListener("click", clickBomb);
}
