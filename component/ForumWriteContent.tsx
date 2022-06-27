import styled from "styled-components";
import Link from "next/link";

const ForumDetailContent = (props) => {
  return (
    <ItemWrapper>
      <Left>
        <LeftText>닉네임</LeftText>
        <LeftText>제목</LeftText>
      </Left>
      <Right>
        <RightInput type="text" maxLength="40">
          {props.nickname}
        </RightInput>
        <RightInput type="text" maxLength="60">
          {props.title}
        </RightInput>
        <RightContentInput type="text">
          {props.content}
        </RightContentInput>
      </Right>
    </ItemWrapper>
  );
};

export default ForumDetailContent;

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
  margin: 20px 2vw 0px 0px;
  text-align: right;
  font-size: 16px;
  font-weight: bold;
  font-family: Pretendard;
  color: #9381dd;
`;

const RightInput = styled.input`
  width: 70vw;
  height: 30px;
  margin: 12px 20px 0px 0px;
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
