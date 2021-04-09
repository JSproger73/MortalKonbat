const subZero = {
  name: "Sub Zero",
  hp: 50,
  img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
  weapon: ["Сhain", "Spear", "Knives"],
  attack: function () {
    console.log(player1.name + "Fight...");
  },
};

const scorpion = {
  name: "Scorpion",
  hp: 50,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: ["Сhain", "Spear", "Knives"],
  attack: function () {
    console.log(player2.name + "Fight...");
  },
};

function createPlayer(player, pers) {
  const $player1 = document.createElement("div");
  $player1.classList.add(player);

  const $progressbar = document.createElement("div");
  $progressbar.classList.add("progressbar");

  const $life = document.createElement("div");
  $life.classList.add("life");
  $life.style.width = pers.hp + "%";

  const $name = document.createElement("div");
  $name.classList.add("name");
  $name.innerText = pers.name;

  const $character = document.createElement("div");
  $character.classList.add("character");

  const $img = document.createElement("img");
  $img.src = pers.img;

  const $arenas = document.querySelector(".arenas");

  $player1.appendChild($progressbar);
  $player1.appendChild($character);
  $progressbar.appendChild($life);
  $progressbar.appendChild($name);
  $character.appendChild($img);
  $arenas.appendChild($player1);
}

createPlayer("player1", subZero);
createPlayer("player2", scorpion);
