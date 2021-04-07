const player1 = {
  name: "Sub Zero",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
  weapon: ["Сhain", "Spear", "Knives"],
  attack: function () {
    console.log(player1.name + "Fight...");
  },
};

const player2 = {
  name: "Scorpin",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: ["Сhain", "Spear", "Knives"],
  attack: function () {
    console.log(player2.name + "Fight...");
  },
};

function createPlayer(player1, player2) {
  const $player1 = document.createElement("div");
  $player1.classList.add("player1");

  const $progressbar = document.createElement("div");
  $progressbar.classList.add("progressbar");
  $player1.appendChild($progressbar);

  const $life = document.createElement("div");
  $life.classList.add("life");
  $life.style.width = player1.hp;
  $progressbar.appendChild($life);

  const $name = document.createElement("div");
  $name.classList.add("name");
  $name.innerText = player1.name;
  $progressbar.appendChild($name);

  const $character = document.createElement("div");
  $character.classList.add("character");
  $player1.appendChild($character);

  const $img = document.createElement("img");
  $img.src = player1.img;
  $character.appendChild($img);

  const $arenas = document.querySelector(".arenas");
  $arenas.appendChild($player1);

  /*---------*/

  const $player2 = document.createElement("div");
  $player2.classList.add("player2");

  const $arena1 = document.querySelector(".arena1");
  $arena1.appendChild($player2);

  const $progressbar2 = document.createElement("div");
  $progressbar2.classList.add("progressbar");
  $player2.appendChild($progressbar2);

  const $life2 = document.createElement("div");
  $life2.classList.add("life");
  $life2.style.width = player2.hp;
  $progressbar2.appendChild($life2);

  const $name2 = document.createElement("div");
  $name2.classList.add("name");
  $name2.innerText = player2.name;
  $progressbar2.appendChild($name2);

  const $character2 = document.createElement("div");
  $character2.classList.add("character");
  $player2.appendChild($character2);

  const $img2 = document.createElement("img");
  $img2.src = player2.img;
  $character2.appendChild($img2);
}

createPlayer("player1", "SUB-ZERO", 50);
createPlayer("player2", "SCORPION", 80);
