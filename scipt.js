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

  // så er der klasser på ...
}
