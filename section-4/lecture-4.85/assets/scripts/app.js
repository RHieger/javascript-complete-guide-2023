const ATTACK_VALUE = 10;   // strength of attack
const MONSTER_ATTACK_VALUE = 14; // strength of monster attack

let chosenMaxLife = 100;  // hard-coded health points for player
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackHandler() {
  const damage = dealMonsterDamage(ATTACK_VALUE);
  currentMonsterHealth -= damage;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  if (
      currentMonsterHealth <= 0 &&
      currentPlayerHealth > 0
    ) {
    alert('You Won!');
  }  else if (
      currentPlayerHealth <= 0 &&
      currentMonsterHealth > 0
    ) {
    alert('You Lost!');
  }  else if (
    currentPlayerHealth <=0 &&
    currentMonsterHealth <= 0
  )  {
    alert('You have a draw!');
  }
}

attackBtn.addEventListener('click', attackHandler);
