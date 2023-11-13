// without destructuring
let ages = [30, 26, 27];
let john = ages[0];
console.log(john);
let mary = ages [1];
console.log(mary);
let joe = ages[2];
console.log(joe);

// with destructuring
let [john1, mary2, joe2] = ages;
console.log(john1, mary2, joe2);

// destructuring objects
let jobs = {
    mike: 'developer',
    jill: 'designer',
    alicia: 'accountant'
};

let {mike, jill, alicia} = jobs;
console.log(mike, jill, alicia);

// destructuring subsets
let languages = ['english', 'french', 'spanish', 'german', 'japanese'];
let [johnNative, johnSecondary, ...others] = languages;
console.log(johnNative, johnSecondary,others);

let [, ,maryNative, marySecondary, ...others1] = languages;
console.log(maryNative, marySecondary, others1);

let languages2 = {
    firstLanguage: "spanish",
    secondLanguage: "english",
    thirdLanguage: "french",
    fourthLanguage: "portuguese"
};

let {firstLanguage, secondLanguage, ...others2} = languages2;
console.log(firstLanguage, secondLanguage, others2);

let {thirdLanguage, fourthLanguage} = languages2;
console.log(thirdLanguage, fourthLanguage);
