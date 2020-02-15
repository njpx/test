const word = "ABCDEFGHIJ";

const swap = (x, y, array) => {
  const temp = array[x];
  array[x] = array[y];
  array[y] = temp;
};

const charArray = [];

/**
 * Convert String to String Array
 */
for (let i = 0; i < word.length; i++) {
  charArray.push(word.charAt(i));
}

const mySet = new Set();

function generate(size, array) {
  if (size === 1) {
    mySet.add(array.join(''));
  } else {
    for (let i = 0; i < size - 1; i += 1) {
      generate(size - 1, array);
      if (i < size - 1) {
        if (size % 2 === 0) {
          swap(i, size - 1, array);
        } else {
          swap(0, size - 1, array);
        }
      }
    }
  }
}

generate(charArray.length, charArray);

console.log(mySet);