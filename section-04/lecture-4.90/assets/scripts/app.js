const ATTACK_VALUE = 10;   // strength of attack
const STRONG_ATTACK_VALUE = 17; // strength of strong attack
const MONSTER_ATTACK_VALUE = 14; // strength of monster attack
const HEAL_VALUE = 20;  // extent to which player is healed

const enteredValue = prompt('Maximum life for you and the monster:', '100');

let chosenMaxLife = parseInt(enteredValue);  // hard-coded health points for player

if ( isNaN(chosenMaxLife) || chosenMaxLife <= 0 ) {
  chosenMaxLife = 100;
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;  // Does play have bonus life?

adjustHealthBars(chosenMaxLife);

function reset()  {
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  resetGame(chosenMaxLife);  // called from vendor.js
}

function endRound()  {
  const initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;

  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false; // bonus life has been used
    removeBonusLife();  // called from vendor.js
    currentPlayerHealth = initialPlayerHealth;  // reset to pre-attach value
    alert('You would be dead, but the bonus life saved you!');
    setPlayerHealth(initialPlayerHealth);  // update health display
  }

  if (
      currentMonsterHealth <= 0 &&
      currentPlayerHealth > 0
    ) {
    alert('You Won!');
    // reset();
  }  else if (
      currentPlayerHealth <= 0 &&
      currentMonsterHealth > 0
    ) {
    alert('You Lost!');
    // reset();
  }  else if (
    currentPlayerHealth <=0 &&
    currentMonsterHealth <= 0
  )  {
    alert('You have a draw!');
    // reset();
  }
  if (
    currentMonsterHealth <= 0 ||
    currentPlayerHealth <= 0
  ) {
    reset();
  }
}

function attackMonster(mode)  {
  let maxDamage;  // value of attack strength
  if (mode === "ATTACK") {
    maxDamage = ATTACK_VALUE;
  }  else if (mode === 'STRONG_ATTACK') {
    maxDamage = STRONG_ATTACK_VALUE;
  }
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  endRound();
}

function attackHandler() {
  attackMonster('ATTACK');
}

function strongAttackHandler()  {
  attackHandler('STRONG_ATTACK');
}

function healPlayerHandler()  {
  let healValue;
  if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE)  {
    alert('You can\'t heal to more than your max initial health.');
    healValue = chosenMaxLife - currentPlayerHealth;
  } else {
    healValue = HEAL_VALUE;
  }
  increasePlayerHealth(healValue); // call from vendor.js
  currentPlayerHealth += healValue;  // update to reflect healing
  endRound();
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
