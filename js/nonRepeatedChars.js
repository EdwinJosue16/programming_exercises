function notRepeatedString(str){
    let map = new Map()
    for(let i = 0; i < str.length; ++i){
        map.set(str[i], map.get(str[i]) ? map.get(str[i]) + 1 : 1)
    }
    
    let result = ''
    
    map.forEach((value, key) => {
        result += key
    })
    
    console.log(result)
}

notRepeatedString("aabcdbeffgd")
