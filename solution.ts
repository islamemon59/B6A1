type CheckValue = string | number | boolean;
const formatValue = (checkValue: CheckValue): CheckValue => {
  if (typeof checkValue === "string") {
    return checkValue.toUpperCase();
  } else if (typeof checkValue === "number") {
    return checkValue * 10;
  } else if (typeof checkValue === "boolean" && checkValue === true) {
    return false;
  } else {
    return true;
  }
};

type CheckLength = string | number[];
const getLength = (checkLength: CheckLength): number => {
  if (typeof checkLength === "string") {
    const stringLength = checkLength.split("");
    console.log(stringLength);
    return stringLength.length;
  } else {
    return checkLength.length;
  }
};

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

type Product = { title: string; rating: number };
const filterByRating = (sortRating: Array<Product>): Array<Product> => {
  const sortedArray: Array<Product> = [];
  sortRating.map((item) => {
    if (Math.floor(item.rating) >= 4) {
      return sortedArray.push(item);
    }
  });

  return sortedArray;
};

