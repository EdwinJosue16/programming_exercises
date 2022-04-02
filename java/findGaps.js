
//gap = the numbers of zeros between one and one

function getBiggerGap(number){
    if(number === 0 || number === 1){
        console.log(0)
        return 0
    }
    const binaryNumber = decToInt(number)
    let bigger = 0
    // base cases 
    for(let i = 0; i < binaryNumber.length - 1; ++i){
        if(binaryNumber[i] === '1' && binaryNumber[i + 1] === '0'){
          const [zeros, index] = countZeros(binaryNumber, i + 1)
          i = index - 1
          if(bigger < zeros)
            bigger = zeros
        }
    }
    console.log(bigger)
    return bigger
}

function countZeros(binaryNumber, indexToStart){
    let zeros = 1
    let oneFound = false
    let index = 0
    
    for(let i = indexToStart + 1; i < binaryNumber.length; ++i){
        if(binaryNumber[i] === '0'){
            zeros += 1
        }else{
            index = i
            break
        }
    }
    
    return [zeros, index]
}

function decToInt(number){
    let result = ''
    let value = ''
     
    while (number != 0) {
        value = number % 2;
        number = parseInt( number / 2);
        result += value.toString()
    }
    console.log(result)
    return result;
}

getBiggerGap(1041)
