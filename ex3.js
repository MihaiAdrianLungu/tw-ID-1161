const string1 = 'test';
const letter = 't';

const compareStrings = (str1, let) => {
    let counter = 0;

    for (const l of str1) {
        if (l !== let) {
            counter++;
        }
    }

    return counter;
}

console.log(compareStrings(string1, letter));