// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// Write a function solution that, given two integers A and B, returns a string containing exactly A letters 'a' and exactly B letters 'b' with no three consecutive letters being the same (in other words, neither "aaa" nor "bbb" may occur in the returned string).

// Examples:

// 1. Given A = 5 and B = 3, your function may return "aabaabab". Note that "abaabbaa" would also be a correct answer. Your function may return any correct answer.

// 2. Given A = 3 and B = 3, your function should return "ababab", "aababb", "abaabb" or any of several other strings.

// 3. Given A = 1 and B = 4, your function should return "bbabb", which is the only correct answer in this case.

// Assume that:

// A and B are integers within the range [0..100];
// at least one solution exists for the given A and B.

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
   const result = ''
   if(A > B) {
      return add(result, A, B, false, true)
   } else {
      return add(result, A, B, true, false)
   }
}


function add(result, Asize, Bsize, b, a){
    if (Asize == 0 && Bsize == 0)
        return result
    if(Bsize >= 2 && ((Asize*2)+2) === Bsize && b){
        Bsize -= 2
        result += 'bb'
        return add(result, Asize, Bsize, false, true)
    }
    else if(b){
        Bsize -= 1
        result += 'b'
        return add(result, Asize, Bsize, false, true)
    }
    else if(Asize >= 2 && ((Bsize*2)+2) === Asize && a){
        Asize -= 2
        result += 'aa'
        return add(result, Asize, Bsize, true, false)
    }
   else if(a){
        Asize -= 1
        result += 'a'
        return add(result, Asize, Bsize, true, false)
   }
}


