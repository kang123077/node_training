import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
const ForumWriteContent = (props) => {
  const [inputs, setInputs] = useState({
    nickname: "",
    title: "",
    password: "",
  });

  return (
    <ItemWrapper>
      <Left>
        <LeftText>닉네임</LeftText>
        <LeftText>제목</LeftText>
        <LeftText>비밀번호</LeftText>
      </Left>
      <Right>
        <RightInput type="text" maxLength="40" name="nickname">
          {props.nickname}
        </RightInput>
        <RightInput type="text" maxLength="60" name="title">
          {props.title}
        </RightInput>
        <RightInput type="text" maxLength="8" name="password">
          {props.password}
        </RightInput>
        <RightContentInput type="text" name="content">
          {props.content}
        </RightContentInput>
      </Right>
      <FixedButtonWrapper>
        <FixedButton onCilck="">확인</FixedButton>
        <FixedButton onCilck="">취소</FixedButton>
      </FixedButtonWrapper>
    </ItemWrapper>
  );
};

export default ForumWriteContent;

const ItemWrapper = styled.a`
  display: flex;
  background-color: #f6f8ff;
  border-style: none none none solid;
  border-color: #9381dd;
  border-width: 6px;
`;

const Left = styled.div`
  width: 11vw;
  height: 100%;
`;

const Right = styled.div`
  width: 77vw;
  height: 100%;
`;

const LeftText = styled.div`
  height: 20px;
  margin: 23px 2vw 0px 0px;
  text-align: right;
  font-size: 16px;
  font-weight: bold;
  font-family: Pretendard;
  color: #9381dd;
`;

const RightInput = styled.input`
  width: 70vw;
  height: 30px;
  margin: 13px 20px 0px 0px;
  margin-right: 20px;
  padding: 0px 10px 0px 10px;
  text-align: left;
  font-size: 14px;
  font-weight: normal;
  font-family: Pretendard;
  color: #9381dd;
  overflow: hidden;
  background: #ffffff;
  border: 1px solid #9381dd;
  box-shadow: 2px 2px 4px rgba(116, 116, 116, 0.25);
  border-radius: 15px;
`;

const RightContentInput = styled.textarea`
  width: 70vw;
  min-height: 500px;
  margin: 20px 20px 20px 0px;
  padding: 10px 10px 0px 10px;
  vertical-align: top;
  text-align: left;
  font-size: 14px;
  font-weight: normal;
  font-family: Pretendard;
  color: #494949;
  overflow: hidden;
  //text-overflow: ellipsis;
  //display: -webkit-box;
  //-webkit-line-clamp: 4;
  //-webkit-box-orient: vertical;
  background: #ffffff;
  border: 1px solid #9381dd;
  box-shadow: 2px 2px 4px rgba(116, 116, 116, 0.25);
  border-radius: 15px;
`;

const FixedButtonWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  right: 20px;
  bottom: 20px;
`;

const FixedButton = styled.button`
  width: 108px;
  height: 40px;
  font-size: 14px;
  background: #f6f8ff;
  border: 1px solid #9381dd;
  box-shadow: 2px 2px 4px rgba(116, 116, 116, 0.25);
  border-radius: 100px;
  margin-top: 20px;

  &:active,
  &:hover,
  &:focus {
    cursor: pointer;
    background: #494949;
    color: white;
  }
`;
