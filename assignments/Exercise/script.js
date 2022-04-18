/* Ques1 */
/**
 * Write a One liner JavaScript function to create an array of objects from an array of strings in the format:
 */

const input = ['Dirk', 'Plato', 'Gwen'];
const output = input.map((element, index) => ({ index: index, name: element }));

console.log(output);


/* Ques2 */
/**
  * Write a one liner function to calculate the total amount donated to a charity by all donors.
  * The data is presented in an array of objects:
  */

const donorsInfo = [
    {
        name: 'Donor1',
        amount: 500,
    },
    {
        name: 'Donor1',
        amount: 500,
    },
    {
        name: 'Donor1',
        amount: 500,
    },
];

const totalAmount = donorsInfo.reduce((acc, { amount }) => acc + amount, 0);

console.log(totalAmount);

/* Ques3 */
/**
  * Write a one liner Function in JS to get all the keys of an object in an array in lowercase.
  */

const object = {
    firstName: 'val',
    lastName: 'val',
};

const result = Object.keys(object).map(element => element.toLowerCase());

console.log(result);

/* Ques4 */
/**
  * Write a JS Function to get the first and last index of the nth largest element in an array that satisfies a condition.
  * EG:
  * In an array of donors as below:
  */

const donorsInfo2 = [
    {
        name: 'Donor1',
        amount: 1500,
    },
    {
        name: 'Donor1',
        amount: 2500,
    },
    {
        name: 'Donor1',
        amount: 5500,
    },
    {
        name: 'Donor1',
        amount: 8900,
    },
    {
        name: 'Donor1',
        amount: 7800,
    },
    {
        name: 'Donor1',
        amount: 5500,
    }
];

const findNthLargestDonor = (donorsInfo2, n) => {
    const maxDonors = donorsInfo2.filter(donor => donor.amount > 5000);

    maxDonors.sort((a, b) => b.amount - a.amount);

    if (n >= maxDonors.length) {
        return [-1, -1];
    }

    const nthLargestElement = maxDonors[n - 1].amount;

    return [(donorsInfo2.map(donor => donor.amount)).indexOf(nthLargestElement), (donorsInfo2.map(donor => donor.amount)).lastIndexOf(nthLargestElement)];
}

console.log(findNthLargestDonor(donorsInfo2, 3));
console.log(findNthLargestDonor(donorsInfo2, 7));

/*  Ques5 */
/**
  * Write a JavaScript function to find the largest level of nesting for arrays.
  * Assume that we do not have circular references.
  */

const myNestedArray = [[[1, 2, 3]], 4, 5, 6, [[[[[7, 8, [9, [10, [11]]]]]]]]];

const findLargestLevelOfNesting = (myNestedArray) => {
    if (Array.isArray(myNestedArray)) {
        return 1 + Math.max(...myNestedArray.map(value => findLargestLevelOfNesting(value)), 0);
    }
    return 0;
}

console.log(findLargestLevelOfNesting(myNestedArray));

/* Ques6 */
/**
 * Write a JavaScript program to get the index of the function in an array of functions
 * which executed the fastest.
 * You cannot run a function more than once.
 */

//Online Solution
const mostPerformant = (func, iterations = 10000) => {
    const times = func.map(fn => {
        const start = performance.now();
        for (let idx = 0; idx < iterations; idx++) fn();
        return performance.now() - start;
    });
    return times.indexOf(Math.min(...times));
};

console.log(mostPerformant([
    () => {
        [1, '2', 3, 4, 5, 6, 7, 8, 9, 10].every(el => typeof el === 'number');
    },
    () => {
        [1, 2, 3, 4, 5, 6, 7, 8, 9, '10'].every(el => typeof el === 'number');
    },
]));



/* Ques7 */

/**
 * Write a JS Function (2 liner??) to get the the nth largest element
 * in an array of objects based on a sort function. This index must be only among those
 * elements that satisfy a condition as provided by a callbackFn
 * Where the sortfunction, the `n` and the condition are params.
 * eg:
 */

const donorsInfo3 = [
    {
        name: 'Donor1',
        amount: 1500,
    },
    {
        name: 'Donor1',
        amount: 2500,
    },
    {
        name: 'Donor1',
        amount: 5500,
    },
    {
        name: 'Donor1',
        amount: 8900,
    },
    {
        name: 'Donor1',
        amount: 7800,
    },
    {
        name: 'Donor1',
        amount: 5500,
    }
];

const sortDonorsArray = (donorsInfo3) => {
    return (donorsInfo3.filter(donor => donor.amount > 5000)).sort((a, b) => b.amount - a.amount);
}

const callbackFunction = (nthLargestElement) => {
    return [(donorsInfo3.map(donor => donor.amount)).indexOf(nthLargestElement), (donorsInfo3.map(donor => donor.amount)).lastIndexOf(nthLargestElement)];
}

const findNthLargestFirstLast = (n, sortDonorsArray, callbackFunction) => {
    if (n >= donorsInfo3.length) {
        return [-1, -1];
    }

    const maxDonors = sortDonorsArray(donorsInfo3);

    const nthLargestElement = maxDonors[n - 1].amount;

    return callbackFunction(nthLargestElement);

}

console.log(findNthLargestFirstLast(3, sortDonorsArray, callbackFunction));
console.log(findNthLargestFirstLast(7, sortDonorsArray, callbackFunction));