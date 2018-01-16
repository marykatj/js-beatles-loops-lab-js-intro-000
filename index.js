const musicians = [];
const instruments = [];

function theBeatlesPlay(musicians, instruments) {
  var empty = [];
  var newArray = [];
  for (let i = 0; i < musicians.length; ++i) {
      newArray.push(`${musicians[i]} plays ${instruments[i]}`);
    }
  return newArray;
}

const facts = [];
function johnLennonFacts(facts) {
  let i = 0
  var newArray = [];
  while (i < facts.length) {
    newArray[i] = facts[i] +"!!!"
    ++i;
  }
  return newArray;
}

function iLoveTheBeatles(number) {
  var empty = [];
  var newArray = [];
  do {
    empty.push("I love the Beatles!");
    number++;
  } while (number < 15);
return string;
}

/* function theBeatlesPlay(musician, instrument) {
  var empty = [];
  var newArray = [];
  for (let i = 0; i < 4; i++) {
      newArray = empty.push(`${musician} plays ${instrument}.`);
    }
    return newArray;
} */
