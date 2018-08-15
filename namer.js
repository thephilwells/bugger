const adjectives = require('./adjectives').adjectives
const bugs = require('./bugs').bugs

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let adjectiveIndex = getRandomInt(adjectives.length)
let bugIndex = getRandomInt(bugs.length)

console.log(adjectives[adjectiveIndex] + ' ' + bugs[bugIndex])
