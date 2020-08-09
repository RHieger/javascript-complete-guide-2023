const ATTACK_VALUE = 10;   // strength of attack
const STRONG_ATTACK_VALUE = 17; // strength of strong attack
const MONSTER_ATTACK_VALUE = 14; // strength of monster attack

let chosenMaxLife = 100;  // hard-coded health points for player
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackMonster(mode)  {
  let maxDamage;  // value of attack strength
  if (mode === "ATTACK") {
    maxDamage = ATTACK_VALUE;
  }  else if (mode === 'STRONG_ATTACK') {
    maxDamage = STRONG_ATTACK_VALUE;
  }
  const damage = dealMonsterDamage(maxDamage);
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

function attackHandler() {
  attackMonster('ATTACK');
}

function strongAttackHandler()  {
  attackHandler('STRONG_ATTACK');
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
