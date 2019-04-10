const adjectives = require('./firsts').adjectives
const bugs = require('./lasts').bugs

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

for (let i = 0; i < 10; i++) {
  let adjectiveIndex = getRandomInt(adjectives.length)
  let bugIndex = getRandomInt(bugs.length)

  console.log(adjectives[adjectiveIndex] + ' ' + bugs[bugIndex])
}