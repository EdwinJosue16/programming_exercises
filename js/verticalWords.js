
// input "TO BE OR NOT TO BE" 
// output [ 'TBONTB', 'OEROOE', '   T  ' ]

// is is possible to readed verticaly

// T O 
// B E 
// O R 
// N O T
// T O 
// B E
function verticalWords(str){
  let wordsArray =  str.split(' ')
  const longestSize = findTheLongestLength(wordsArray)
  let verticalWords = Array(longestSize).fill('')

    for(let i = 0; i < wordsArray.length; ++i){
      const wordArray  =  Array.from(wordsArray[i])
      for(let index = 0; index < longestSize; ++index){
        if(index < wordArray.length)
          verticalWords[index] += wordArray[index]
        else 
          verticalWords[index] += ' '
      }
    }
    
  console.log(verticalWords)
  return wordsArray
}

function findTheLongestLength(wordsArray){
  let longest = 0
  
  for(let i = 0; i < wordsArray.length; ++i){
    const length = wordsArray[i].length 
    if(length > longest)
      longest = length
  }
  
  return longest
}

verticalWords("TO BE OR NOT TO BE") // [ 'TBONTB', 'OEROOE', '   T  ' ]
