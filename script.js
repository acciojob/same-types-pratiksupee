function isSameType(value1, value2) {
   let num1 = Number(value1);
  let num2 = Number(value2);

  if (!Number.isNaN(num1)) value1 = num1;
  if (!Number.isNaN(num2)) value2 = num2;

  // Check NaN case
  if (Number.isNaN(value1) && Number.isNaN(value2)) {
    return true;
  }

  // Compare types
  return typeof value1 === typeof value2;
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
