const letterGroups = {
  "vowels": ["a", "e", "i", "o", "u"]
}

const getLetterGroup = letterType => {
  switch (letterType) {
    case "vowels":
      return letterGroups[letterType]
    default:
      return letterGroups.letterType
  }
}

export default getLetterGroup
