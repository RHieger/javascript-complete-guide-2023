const ATTACK_VALUE = 10;   // strength of attack

let chosenMaxLife = 100;  // hard-coded health points for player
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackHandler() {
  const damage = dealMonsterDamage(ATTACK_VALUE);
  currentMonsterHealth -= damage;
}

attackBtn.addEventListener('click', attackHandler);
