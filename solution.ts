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

console.log(getLength("typescript"));
console.log(getLength([10, 20, 30, 40]));
