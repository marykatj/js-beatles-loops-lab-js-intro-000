const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  var empty = [];
  var newArray = [];
  for (let i = 0; i < 4; i++) {
      newArray = [...empty,`${musicians} plays ${instruments}.`];
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
  var string = "I love the Beatles!";
  do {
    number++
    return string;
  } while (number < 15);
}

/* function theBeatlesPlay(musician, instrument) {
  var empty = [];
  var newArray = [];
  for (let i = 0; i < 4; i++) {
      newArray = empty.push(`${musician} plays ${instrument}.`);
    }
    return newArray;
} */
