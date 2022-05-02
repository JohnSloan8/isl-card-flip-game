import { shuffleArray } from "../utils"

const letterGroups = {
  "vowels": ["a", "e", "i", "o", "u"],
  "consonants": ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"],
  "all": ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  "all_except_moving": ["a", "b", "c", "d", "e", "f", "g", "h", "i", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "y"],
  "static_consonants": ["b", "c", "d", "f", "g", "h", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "y"],
  "moving_consonants": ["j", "x", "z"]
}

const getLetterGroup = (gameType, imageType, number) => {
  if (gameType === "all" && imageType === "photo") {
    let shuffledArray = shuffleArray(letterGroups["all_except_moving"])
    return [...shuffledArray].splice(0, number)
  } else if (gameType === "static_consonants" || gameType === "consonants" || gameType === "all") {
    let shuffledArray = shuffleArray(letterGroups[gameType])
    return [...shuffledArray].splice(0, number)
  } else {
    return letterGroups[gameType]
  }
}

export default getLetterGroup
