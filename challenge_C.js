const arraySorter = stack => {

    for (let i = 0; i < stack.length; i++) {

        for (let j = i + 1; j < stack.length; j++) {
            if (stack[j] > stack[i]) {
                let temp = stack[i];
                stack[i] = stack[j];
                stack[j] = temp;
            }
        }
    }
    return stack;

}
console.log(arraySorter([1, 5, 2, 4, 3]))