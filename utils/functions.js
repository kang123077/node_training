export const functionCalculator = ({ num1, type, num2 }) => {
  switch (type) {
    case "+":
      return +num1 + +num2;
    case "-":
      return +num1 - +num2;
    case "*":
      return +num1 * +num2;
    case "/":
      return +num1 / +num2;
    default:
      return "typeerror";
  }
};
