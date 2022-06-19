import MyLayout from "../component/MyLayout";
import { functionCalculator } from "../utils/functions";
import { useCallback, useDebugValue, useEffect, useState } from "react";

const Calculator2 = () => {
  const [result, setResult] = useState<number | "typeerror">(0);
  const [inputs, setInputs] = useState({
    num1: 0,
    type: "+",
    num2: 0,
  });

  const { num1, type, num2 } = inputs;

  useEffect(() => {
	document.title = `Result is ${result}`
  }, [result]);
  
  const onChangeValue = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const calculate = useCallback(() => {
    setResult(
      functionCalculator({
        num1: num1,
        type: type,
        num2: num2,
      })
    );
  }, [num1, num2, type]);

  return (
    <div>
      <MyLayout>
        <h1>Calculator</h1>
        <p>num1 : </p>
        <input type="number" name="num1" onChange={onChangeValue} />
        <p>type : </p>
        <input type="text" name="type" onChange={onChangeValue} />
        <p>num2 : </p>
        <input type="number" name="num2" onChange={onChangeValue} />
        <p>result = {result}</p>
        <button onClick={calculate}>calculate</button>
      </MyLayout>
    </div>
  );
};

export default Calculator2;
