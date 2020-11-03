// 1. Referential Type Equality

/* Uncoment me
const hero1 = {
  name: 'wirosableng'
};

const hero2 = {
  name: 'spiderman'
};

// Loose Equality Operator 
let heroCompare1 = hero1 == hero1 ; // true
let heroCompare2 = hero1 == hero2 ; // false


// Strict Equality Operator 
let heroCompare3 = hero1 === hero1 ; // true
let heroCompare4 = hero1 === hero2 ; // false

// Object.is() function
let heroCompare5 = Object.is(hero1, hero1); // true
let heroCompare6 = Object.is(hero1, hero2); // false



console.log( heroCompare1 );
console.log( heroCompare2 );

console.log( heroCompare3 );
console.log( heroCompare4 );

console.log(heroCompare5);
console.log(heroCompare6);

*/

// 2. Manual Comparison

/*
function isHeroEqual(object1, object2) {
  return object1.name === object2.name;
}

const hero1 = {
  name: 'wonderwoman'
}

const hero2 = {
  name: 'wonderwoman'
}

const hero3 = {
  name: 'superman'
}

console.log(isHeroEqual(hero1, hero2)); // true
console.log(isHeroEqual(hero1, hero3)); // false

*/

// 3. Shallow Equality

/*

function shallowEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if( keys1.length !== keys1.length){
    return false;
  }

  for( let key of keys1) {
    if ( object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
}

const hero1 = {
  name: 'superman',
  weaknes: 'krypton' 
}
const hero2 = {
  name: 'superman',
  weaknes: 'krypton' 
}

const hero3= {
  name: "wonderwoman"
}

const hero4 = {
  name: "batman",
  address: {
    city: 'Gotham'
  }
}

const hero5 = {
  name: "batman",
  address: {
    city: 'Gotham'
  }
}

console.log(shallowEqual(hero1, hero2)); // true
console.log(shallowEqual(hero1, hero3)); // false

console.log(shallowEqual(hero4, hero5)); // false

*/

// 4. Deep Equality

/*
function deepEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys1.length) {
    return false;
  }

  for (const key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];
    const areObjects = isObject(val1) && isObject(val2);

    if (
      (areObjects && !deepEqual(val1, val2)) ||
      (!areObjects && val1 !== val2)
    ) {
      return false;
    }
  }
  return true
}

function isObject(object){
  return object != null && typeof object === 'object';
}

const hero4 = {
  name: "batman",
  address: {
    city: 'Gotham'
  }
}

const hero5 = {
  name: "batman",
  address: {
    city: 'Gotham'
  }
}

console.log(deepEqual(hero4, hero5)); // true

*/