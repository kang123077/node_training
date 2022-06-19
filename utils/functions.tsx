export const functionCalculator = ({
  num1,
  type,
  num2,
}: {
  num1: string;
  type: "+" | "-" | "*" | "/" | string;
  num2: string;
}) => {
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

export const fucntionFibonacci = (n: number) => {
  if (n < 0) return "error!";
  if (n > 32) return "too high";
  if (n <= 1) {
    return n;
  }
  return fucntionFibonacci(n - 1) + fucntionFibonacci(n - 2);
};
