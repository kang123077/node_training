import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";

const ForumPreProContent = (props) => {
  return (
    <Link href={`${props.id}`}>
      <ItemWrapper>
        <Left>
          <LeftText>닉네임</LeftText>
          <LeftText>제목</LeftText>
        </Left>
        <Right>
          <RightText>{props.nickname}</RightText>
          <RightText>{props.title}</RightText>
        </Right>
      </ItemWrapper>
    </Link>
  );
};

export default ForumPreProContent;

const ItemWrapper = styled.a`
  height: 100px;
  display: flex;
  background-color: #f6f8ff;
  border-style: none none none solid;
  border-color: #9381dd;
  border-width: 6px;
  cursor: Pointer;
`;

const Left = styled.div`
  width: 8vw;
  height: 100%;
`;

const Right = styled.div`
  width: 35vw;
  height: 100%;
`;

const LeftText = styled.div`
  height: 20px;
  margin: 20px 1.8vw 0px 0px;
  text-align: right;
  font-size: 14px;
  font-weight: bold;
  color: #9381dd;
`;

const RightText = styled.div`
  height: 20px;
  margin: 21.5px 20px 0px 0px;
  margin-right: 20px;
  text-align: left;
  font-size: 12px;
  font-weight: normal;
  color: #9381dd;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const RightContent = styled.div`
  height: 48px;
  margin: 21.5px 20px 20px 0px;
  text-align: left;
  font-size: 12px;
  font-weight: normal;
  color: #494949;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
