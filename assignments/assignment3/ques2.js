// Implement the JSON.stringify method yourself for plain objects containing only primitive values. Bonus, if you
// can recursion for nested objects. The object does not contain values that are functions, circular references or
// functions...

const obj1 = {
    a: 1,
    b: 2,
    c: {
        d: 'hello',
        e: function () {
            console.log('hello folks!');
        }
    }
};


const obj2 = {};

obj2.a = obj2;

const obj3 = {
    a: null
};


const isObjectContainsPrimitive = (obj) => {
    for (const key in obj) {

        if (obj[key] === obj || Array.isArray(obj[key]) || obj[key] === null || obj[key] instanceof Function) {
            return false;
        }
        if (typeof obj[key] === "object" && !isObjectContainsPrimitive(obj[key])) {
            return false;
        }
    }
    return true;
}

console.log(isObjectContainsPrimitive(obj1));
console.log(isObjectContainsPrimitive(obj2));
console.log(isObjectContainsPrimitive(obj3));