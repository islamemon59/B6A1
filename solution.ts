const formatValue = (
  checkValue: string | number | boolean
): string | number | boolean => {
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

const getLength = (checkLength: string | number[]): number => {
  if (typeof checkLength === "string") {
    const stringLength = checkLength.split("");
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
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

type Product = { title: string; rating: number };
const filterByRating = (sortRating: Product[]): Product[] => {
  const sortedArray: Product[] = sortRating.filter(
    (item) => Math.floor(item.rating) >= 4
  );

  return sortedArray;
};

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};
const filterActiveUsers = (users: User[]): User[] => {
  const activeUsers: User[] = users.filter(
    (user) => typeof user.isActive === "boolean" && user.isActive === true
  );

  return activeUsers;
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}
const printBookDetails = (books: Book) => {
  return `Title: ${books.title}, Author: ${books.author}, Published: ${
    books.publishedYear
  }, Available: ${books.isAvailable ? "Yes" : "No"}`;
};

const getUniqueValues = (
  array1: number[] | string[],
  array2: number[] | string[]
): number[] => {
  const newArray: number[] = [];
  let arrayIndex: number = 0;
  let isExist: boolean = false;

  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < newArray.length; j++) {
      if (newArray[j] === array1[i]) {
        isExist = true;
        break;
      }
    }

    if (!isExist) {
      newArray[arrayIndex] = Number(array1[i]);
      arrayIndex++;
    }
    for (let i = 0; i < array2.length; i++) {
      for (let j = 0; j < newArray.length; j++) {
        if (newArray[j] === array2[i]) {
          isExist = true;
          break;
        }
      }

      if (!isExist) {
        newArray[arrayIndex] = Number(array2[i]);
        arrayIndex++;
      }
    }
  }
  return newArray;
};

type Items = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};
const calculateTotalPrice = (products: Items[]): number => {
  if (products.length === 0) {
    return 0;
  } else {
    const allProductPrice = products.reduce(
      (acc: number, item: Items): number => {
        const { price, discount, quantity } = item;
        if (!discount) {
          acc = acc + price * quantity;
        } else {
          const discountPrice = price * quantity * (discount / 100);
          acc = acc + price * quantity - discountPrice;
        }
        return acc;
      },
      0
    );
    return allProductPrice;
  }
};
