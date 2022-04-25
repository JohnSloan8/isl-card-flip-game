import { shuffleArray } from "../utils"

const letterGroups = {
  "vowels": ["a", "e", "i", "o", "u"],
  "consonants": ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"],
  "static consonants": ["b", "c", "d", "f", "g", "h", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "y"],
  "moving consonants": ["j", "x", "z"]
}

const getLetterGroup = (letterType, number) => {
  if (letterType === "static consonants" || letterType === "consonants") {
    let shuffledArray = shuffleArray(letterGroups[letterType])
    return shuffledArray.splice(0, number)
  } else {
    return letterGroups[letterType]
  }
}

export default getLetterGroup
