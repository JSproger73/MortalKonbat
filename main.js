const $arenas = document.querySelector(".arenas");
const $randomButton = document.querySelector(".button");

const player1 = {
  player: 1,
  name: "Sub Zero",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
  weapon: ["Сhain", "Spear", "Knives"],
  attack: function () {
    console.log(player1.name + "Fight...");
  },
};

const player2 = {
  player: 2,
  name: "Scorpion",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
  weapon: ["Сhain", "Spear", "Knives"],
  attack: function () {
    console.log(player2.name + "Fight...");
  },
};

function createElement(tag, className) {
  const $tag = document.createElement(tag);
  if (className) {
    $tag.classList.add(className);
  }
  return $tag;
}

function createPlayer(pers) {
  const $player = createElement("div", "player" + pers.player);
  const $progressbar = createElement("div", "progressbar");
  const $life = createElement("div", "life");
  const $name = createElement("div", "name");
  const $character = createElement("div", "character");
  const $img = createElement("img");

  $life.style.width = pers.hp + "%";
  $name.innerText = pers.name;
  $img.src = pers.img;

  $player.appendChild($progressbar);
  $player.appendChild($character);
  $progressbar.appendChild($life);
  $progressbar.appendChild($name);
  $character.appendChild($img);

  return $player;
}

function changeHP(player) {
  const $playerLife = document.querySelector(
    ".player" + player.player + " .life"
  );
  player.hp -= random(1, 20);
  $playerLife.style.width = player.hp + "%";

  if (player.hp <= 0) {
    player.hp = 0;
    $arenas.appendChild(playerWins(player.name));
  }

  if (player.hp === 0) {
    $randomButton.disabled = true;
  }
  console.log(player.hp);
}

function playerWins(name) {
  const $winsTitle = createElement("div", "loseTitle");
  $winsTitle.innerText = name + " wins";

  return $winsTitle;
}

function random(firstNumber, secondNumber) {
  firstNumber = Math.ceil(firstNumber);
  secondNumber = Math.floor(secondNumber);
  return (
    Math.floor(Math.random() * (secondNumber - firstNumber + 1)) + firstNumber
  );
}

$randomButton.addEventListener("click", function () {
  changeHP(player1);
  changeHP(player2);
});

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));
