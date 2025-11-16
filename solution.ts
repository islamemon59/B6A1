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

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};
const filterActiveUsers = (users: Array<User>): Array<User> => {
  const activeUsers: Array<User> = [];
  users.filter((user) => {
    if (typeof user.isActive === "boolean" && user.isActive === true) {
      activeUsers.push(user);
    }
  });

  return activeUsers;
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}
const printBookDetails = (books: Book) => {
  console.log(
    `Title: ${books.title}, Author: ${books.author}, Published: ${
      books.publishedYear
    }, Available: ${books.isAvailable ? "Yes" : "No"}`
  );
};

type Array1 = number[] | string[];
type Array2 = number[] | string[];
const getUniqueValues = (array1: Array1, array2: Array2): number[] => {
  const newArray: number[] = [];
  array1.map((arr1) => {
    if (typeof arr1 === "string") {
      if (!newArray.includes(Number(arr1))) {
        newArray.push(Number(arr1));
      }
    } else if (!newArray.includes(arr1)) {
      newArray.push(arr1);
    }
    array2.map((arr2) => {
      if (typeof arr2 === "string") {
        if (!newArray.includes(Number(arr2))) {
          newArray.push(Number(arr2));
        }
      } else if (!newArray.includes(arr2)) {
        newArray.push(arr2);
      }
    });
  });

  

  return newArray.sort();
};
