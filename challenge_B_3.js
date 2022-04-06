const  arrayReversor=(array)=>{
    
    let reversedArray=[]
    let before  = reversedArray
    for(let elem=array.length-1;elem>=0;elem--) reversedArray.push(array[elem])
     return reversedArray

}

// Test array 
let testArray = [2,4,6,8];

// Output
console.log(`Before Array = ${testArray}`)
console.log(`Reversed Array = ${arrayReversor(testArray)}`)



