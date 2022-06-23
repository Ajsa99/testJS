const array1 = [
  { id: "333222111", name: "SuleJman", age: "22" },
  { id: "321123432", name: "Stefan", age: "25" },
  { id: "222312543", name: "Semir", age: "32" },
  { id: "222312", name: "ImRan", age: "35" },
  { id: "2223125", name: "IrfAn", age: "42" },
  { id: "2223232", name: "Daris", age: "18" },
  { id: "222324234", name: "Ahmed", age: "25" },
];

const fn = (array, name) => {
  const upper = array.filter((element) => {
    return element.name.toUpperCase() === name.toUpperCase();
  });
  return upper;
};

console.log(fn(array1, "SemiR"), "prvi");
//result [ { id: '222312543', name: 'Semir', age: '32' } ] prvi

console.log(fn(array1, "SEMIR"), "drugi");
//result [ { id: '222312543', name: 'Semir', age: '32' } ] drugi

console.log(fn(array1, "SEMIR1"), "treci");
//result [] treci
