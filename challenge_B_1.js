const getPrime=(stack)=>{
    const primeList=[]
    for(let element=0;element<stack.length;element++)
    {
        let canDevise=parseInt(stack[element]/2)
        let isPrime=true
        for(let divider=2;divider<=canDevise;divider++){
           if(stack[element]%divider==0)
           {
              isPrime=false
           } 
        }
        if(isPrime)
        {
            primeList.push(stack[element])
        }
    }
    return primeList
}

console.log(`Result : ${getPrime([ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97])}`)