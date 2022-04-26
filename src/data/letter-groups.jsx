import { shuffleArray } from "../utils"

const letterGroups = {
  "vowels": ["a", "e", "i", "o", "u"],
  "consonants": ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"],
  "all": ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  "static_consonants": ["b", "c", "d", "f", "g", "h", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "y"],
  "moving_consonants": ["j", "x", "z"]
}

const getLetterGroup = (letterType, number) => {
  if (letterType === "static_consonants" || letterType === "consonants" || letterType === "all") {
    let shuffledArray = shuffleArray(letterGroups[letterType])
    return [...shuffledArray].splice(0, number)
  } else {
    return letterGroups[letterType]
  }
}

export default getLetterGroup
