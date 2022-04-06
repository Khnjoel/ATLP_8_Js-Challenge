const objectFormatter = (stack) => {
    let obj = {};
    for (let elem = 0; elem < stack.length; elem++) {
        let items = stack[elem].split(',');
        let names = items[0].split(" ")
        let current = {}
        current.secondName = names[1];
        current.age = items[1];
        obj[`${names[0]}`] = current;
    }
    return obj
}

const dummyObj = ["Patrick wyne, 30", "lil wyne, 32", "Eric mimi, 21", "Dodos deck, 21", "Alian Dwine,22", "Patrick wyne, 33", "Patrick wyne, 100", "Patrick wyne, 40"];
console.log(objectFormatter(dummyObj))