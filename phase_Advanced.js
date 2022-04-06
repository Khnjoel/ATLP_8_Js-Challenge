const familyApi = (stack) => {
    return new Promise(function(resolve, reject) {
        let store = []
        setTimeout(() => {
                let totalChildren = 0;
                let arraySize = stack.length;
                stack.forEach(element => {
                    if (element.fatherName === "Vyes")
                        reject("Yves is not an allowed dad in 2022")

                    if (element.childrenNumbe >= 0)
                        totalChildren += element.childrenNumbe;
                    else
                        arraySize--
                });
                let avg_children = totalChildren / arraySize
                stack.forEach(element => {
                    element.averageOfChildrenPerFamily = avg_children;
                    store.push(element)
                });
                resolve(store)
            },
            1000);
    });
}

familyApi([{
        fatherName: "mugabo",
        MotherName: "mukamana",
        childrenNumbe: 2
    }, {
        fatherName: "eric",
        MotherName: "alice",
        childrenNumbe: 6
    }, {
        fatherName: "manzi",
        MotherName: "leah",
        childrenNumbe: -2
    }])
    .then(families => console.log(families))
    .catch(error => console.log(error))