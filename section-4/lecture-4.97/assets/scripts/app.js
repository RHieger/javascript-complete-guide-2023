const ATTACK_VALUE = 10;   // strength of attack
const STRONG_ATTACK_VALUE = 17; // strength of strong attack
const MONSTER_ATTACK_VALUE = 14; // strength of monster attack
const HEAL_VALUE = 20;  // extent to which player is healed

const MODE_ATTACK = 'ATTACK';  // normal attack mode
const MODE_STRONG_ATTACK = 'STRONG_ATTACK';  // strong attack mode
// Event log types:
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';

const enteredValue = prompt('Maximum life for you and the monster:', '100');

let chosenMaxLife = parseInt(enteredValue);  // hard-coded health points for player
let battleLog = []; // contains log of all battle activities

if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
  chosenMaxLife = 100;
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;  // Does play have bonus life?

adjustHealthBars(chosenMaxLife);

function writeToLog(
  logEvent,
  logVal,
  monsterHealth,
  playerHealth
) {
  let logEntry = {
    event: logEvent,
    value: logVal,
    target: 'MONSTER',
    finalMonsterHealth: monsterHealth,
    finalPlayerHealth: playerHealth
  };
  switch (logEvent) {
    case LOG_EVENT_PLAYER_ATTACK:
      logEntry.target = 'MONSTER';
      break;
    case LOG_EVENT_PLAYER_STRONG_ATTACK:
      logEntry.target = 'MONSTER';
      break;
    case LOG_EVENT_MONSTER_ATTACK:
      logEntry.target = 'PLAYER';
      break;
    case LOG_EVENT_PLAYER_HEAL:
      logEntry.target = 'PLAYER';
      break;
    case LOG_EVENT_GAME_OVER:
      logEntry = {
        event: logEvent,
        value: logVal,
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth
      }
      break;
    default:
      logEntrey = {};
  }
  // if (logEvent === LOG_EVENT_PLAYER_ATTACK) {
  //   logEntry.target = 'MONSTER';
  // } else if (logEvent === LOG_EVENT_PLAYER_STRONG_ATTACK) {
  //   logEntry.target = 'MONSTER';
  // } else if (logEvent = LOG_EVENT_MONSTER_ATTACK) {
  //   logEntry.target = 'PLAYER';
  // } else if (logEvent === LOG_EVENT_PLAYER_HEAL) {
  //   logEntry.target = 'PLAYER';
  // } else if (logEvent === LOG_EVENT_GAME_OVER) {
  //   logEntry = {
  //     event: logEvent,
  //     value: logVal,
  //     finalMonsterHealth: monsterHealth,
  //     finalPlayerHealth: playerHealth
  //   }
  // }
  battleLog.push(logEntry);
}

function reset() {
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  resetGame(chosenMaxLife);  // called from vendor.js
}

function endRound() {
  const initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  writeToLog(
    LOG_EVENT_MONSTER_ATTACK,
    playerDamage,
    currentMonsterHealth,
    currentPlayerHealth
  );

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
    writeToLog(
      LOG_EVENT_GAME_OVER,
      'PLAYER WON',
      currentMonsterHealth,
      currentPlayerHealth
    )
  } else if (
    currentPlayerHealth <= 0 &&
    currentMonsterHealth > 0
  ) {
    alert('You Lost!');
    writeToLog(
      LOG_EVENT_GAME_OVER,
      'MONSTER WON',
      currentMonsterHealth,
      currentPlayerHealth
    )
  } else if (
    currentPlayerHealth <= 0 &&
    currentMonsterHealth <= 0
  ) {
    alert('You have a draw!');
    writeToLog(
      LOG_EVENT_GAME_OVER,
      'DRAW',
      currentMonsterHealth,
      currentPlayerHealth
    )
  }
  if (
    currentMonsterHealth <= 0 ||
    currentPlayerHealth <= 0
  ) {
    reset();
  }
}

function attackMonster(mode) {
  const maxDamage = mode === MODE_ATTACK ?
    ATTACK_VALUE :
    STRONG_ATTACK_VALUE;
  const logAttackMode = mode === MODE_ATTACK ?
    LOG_EVENT_PLAYER_ATTACK :
    LOG_EVENT_PLAYER_STRONG_ATTACK;
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  writeToLog(
    logAttackMode,
    damage,
    currentMonsterHealth,
    currentPlayerHealth
  )
  endRound();
}

function attackHandler() {
  attackMonster(MODE_ATTACK);
}

function strongAttackHandler() {
  attackHandler(MODE_STRONG_ATTACK);
}

function healPlayerHandler() {
  let healValue;
  if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
    alert('You can\'t heal to more than your max initial health.');
    healValue = chosenMaxLife - currentPlayerHealth;
  } else {
    healValue = HEAL_VALUE;
  }
  increasePlayerHealth(healValue); // call from vendor.js
  currentPlayerHealth += healValue;  // update to reflect healing
  writeToLog(
    LOG_EVENT_PLAYER_HEAL,
    healValue,
    currentMonsterHealth,
    currentPlayerHealth
  )
  endRound();
}

function printLogHandler() {
  console.log(battleLog);
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', printLogHandler);
