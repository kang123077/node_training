import MyLayout from "../component/MyLayout";
import styled from "styled-components";
import { functionCalculator } from "../utils/functions";
import { useState } from "react";

const Calculator = ({ result }) => {
  console.log(result);
  return (
    <div>
      <MyLayout>
        <h1>Calculator</h1>
        <form action="/calculator" method="get">
          <label>num1 : </label>
          <input type="number" id="num1" name="num1"></input>
          <br></br>
          <label>type : </label>
          <input type="text" id="type" name="type"></input>
          <br></br>
          <label>num2 : </label>
          <input type="number" id="num2" name="num2"></input>
          <br></br>
          <input type="submit" value="calculate"></input>
        </form>
        <p>result = {result}</p>
      </MyLayout>
    </div>
  );
};

export const getServerSideProps = ({ query }) => {
  const { num1 = 0, type = "+", num2 = 0 } = query;
  console.log(query);
  const result = functionCalculator({
    num1: num1,
    num2: num2,
    type: type,
  });
  return {
    props: {
      result: result,
    },
  };
};

export default Calculator;

const Form = styled.form`
  display: flex;
  gap: 5px;
`;
