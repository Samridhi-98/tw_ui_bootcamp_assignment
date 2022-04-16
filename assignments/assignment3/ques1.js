// Write a function to check if 2 objects containing only primitive values or nested objects contain exactly the
// same values, i.e. they are the same. Hint: use typeof. eg: `if (typeof object1.c === 'object') {}`

const obj1 = {
    a: 1,
    b: 2,
    c: {
        d: ['hello']
    }
};

const obj2 = {
    a: 1,
    b: 2,
    c: {
        d: 'hello'
    }
};

const obj3 = {
    a: 1,
    b: 5,
    c: {
        d: {
            e: ['hello folks']
        }
    },
    f: 7
};


const isObjectContainsPrimitive = (obj) => {
    for (const key in obj) {
        if (Array.isArray(obj[key])) {
            return false;
        }
        if (typeof obj[key] === "object" && !isObjectContainsPrimitive(obj[key])) {
            return false;
        }
    }
    return true;
}

const compareTwoObjects = (obj1, obj2) => {
    if (isObjectContainsPrimitive(obj1) && isObjectContainsPrimitive(obj2)) {
        return JSON.stringify(obj1) === JSON.stringify(obj2);
    }
    return false;
}

console.log(compareTwoObjects(obj1, obj2));
console.log(compareTwoObjects(obj1, obj3));
console.log(compareTwoObjects(obj3, obj2));
console.log(compareTwoObjects(obj2, obj2));