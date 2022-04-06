const  isPalindrome=(pattern)=>{
    let patternChars=pattern.split('');
    let store='';
    for(let i=patternChars.length-1;i>=0;i--)
         store+=patternChars[i];
    if(pattern.toLowerCase()==store.toLowerCase()) return true
    else return false
 }
 
 // Testing palindrome 101 to TRUE AND 1918 TO False
 console.log(isPalindrome("101"))
 console.log(isPalindrome("1918"))