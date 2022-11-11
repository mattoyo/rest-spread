function filterOutOdds( ...nums ) {
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }

  function findMin(...min) {
    return min.reduce((accum, nextVal) => accum < nextVal ? accum : nextVal);
  }

  const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

  const doubleAndReturnArgs = (array, ...nums) => [...array, ...nums.map(val => val*2)]

  const removeRandom = (items) => {
    let randomNumber = Math.floor(Math.random()*items.length)
    return [...items.slice(0, randomNumber), ...items.slice(randomNumber+1)]
  }

  const bothArrays = (arr1, arr2) => [...arr1, ...arr2];

  const newObj = (obj, key, value) => {

    let obj1 = { ...obj }
    obj1[key] = value;
    return obj1;

  }

  const removeKey = (obj, key) => {
    let newObj = { ...obj }
    delete newObj[key]
    return newObj;
  }

const combineObj = (obj1, obj2) => ({ ...obj1, ...obj2 });

const newObj = (obj, key, value) => {

    let obj1 = { ...obj }
    obj1[key] = value
    return obj1
}


  