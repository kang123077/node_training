import MyLayout from "../component/MyLayout";
import { fucntionFibonacci } from "../utils/functions";
import { useCallback, useDebugValue, useEffect, useState } from "react";

const Fibonacci = () => {
  const [n, setN] = useState();

  //useCallback 사용이 필요 없는 포맷인듯?
  const onChangeValue = (e) => {
    setN(fucntionFibonacci(e.target.value));
  };

  useEffect(() => {
    document.title = `n번째 피보나치 수열은 ${n}`;
  }, [n]);

  console.log(n);

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
