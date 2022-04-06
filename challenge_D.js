const testMajority=array=>{
    let halfSize=parseInt(array.length/2)
        for(let i=0; i<array.length; i++)
        {
            let counter=0;
            for(let j=0; j<array.length; j++)
            {
                if(array[j] == array[i])
                {
                    counter++
                }
            }
            if(halfSize<counter)
            {
                return "This array contains a majority element";
            }
        }
        return "this array has no majority element";
    
    }

    let hasMajority = [3,1,3,4,4,5,3,5,3,3,3,6,3];

    console.log(testMajority(hasMajority))