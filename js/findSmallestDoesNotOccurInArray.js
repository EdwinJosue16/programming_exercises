// This is a demo task.

// Write a function:

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].

function findSmallestDoesNotOccurIn(array = []){
    let smallest = 1
    const sorted = array.sort((a,b)=>{
        return a>b ? 1 : a<b ? -1 : 0
    })
    let currentVal
    let nextVal
    for(let i = 0; i<sorted.length;++i){
        currentVal = sorted[i]
        nextVal = sorted[i+1]
        if(currentVal<= smallest && currentVal >0){
            smallest = currentVal + 1
        }
        if(nextVal && nextVal > smallest) break
    }
    return smallest
}

console.log(findSmallestDoesNotOccurIn([1, 3, 6, 4, 1, 2]))
console.log(findSmallestDoesNotOccurIn([1, 2, 3]))
console.log(findSmallestDoesNotOccurIn([-1, -3]))
console.log(findSmallestDoesNotOccurIn([2, 3, 4, 5, 7, 8, 19, 43]))
console.log(findSmallestDoesNotOccurIn([1, 2, 3, 4, 5, 7, 8, 19, 43]))
