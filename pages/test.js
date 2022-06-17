import MyLayout from "../component/MyLayout";
import React, { useEffect, useState } from "react";

const Test = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <MyLayout>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me!</button>
      </MyLayout>
    </div>
  );
};

export default Test;
