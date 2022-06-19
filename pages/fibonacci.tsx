import MyLayout from "../component/MyLayout";
import { fucntionFibonacci } from "../utils/functions";
import { useCallback, useDebugValue, useEffect, useState } from "react";

const Fibonacci = () => {
  const [n, setN] = useState();

  const onChangeValue = useCallback(
    (e) => {
      setN(fucntionFibonacci(e.target.value));
    },
    [n]
  );

  useEffect(() => {
    document.title = `n번째 피보나치 수열은 ${n}`;
  }, [n]);

  return (
    <div>
      <MyLayout>
        <h1>Fibonnaci</h1>
        <div>
          <p>피보나치 수열의</p>
          <input type="number" placeholder="n" onChange={onChangeValue}></input>
          <p>번째 수는</p>
          <p>{n}</p>
        </div>
      </MyLayout>
    </div>
  );
};

export default Fibonacci;
