const string1 = 'test';
const string2 = 'best';

const compareStrings = (str1, str2) => {
    if (str1.length !== str2.length) {
        return -1;
    }

    let counter = 0;

    for (const i in str1) {
        if (str1[i] !== str2[i]) {
            counter++;
        }
    }

    return counter;
}

console.log(compareStrings(string1, string2));