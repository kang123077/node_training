import MyLayout from "../component/MyLayout";
import styled from "styled-components";
import { useState } from "react";

const Querybanner = () => {
  return (
    <div>
      <Banner>
        <H1>QueryPaginationTest</H1>
        <LimitButton>20</LimitButton>
        <LimitButton>10</LimitButton>
        <LimitButton>5</LimitButton>
        <P>set page limit</P>
      </Banner>
    </div>
  );
};

export default Querybanner;

const Banner = styled.div`
  display: block;
  max-width: 830px;
  min-width: 440px;
`;

const H1 = styled.h1`
  display: inline-block;
  font-size: 2em;
  margin-block-start: 0.63em;
  margin-block-end: 0.63em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`;

const P = styled.p`
  display: inline-block;
  float: right;
  margin: 34px 0px 0px 10px;
`;

const LimitButton = styled.button`
  position: relative;
  float: right;
  margin: 34px 0px 20px 10px;
  height: 24px;
`;
