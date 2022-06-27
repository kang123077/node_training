import styled from "styled-components";
import Link from "next/link";

const ForumDetailContent = (props) => {
  return (
    <ItemWrapper>
      <Left>
        <LeftText>닉네임</LeftText>
        <LeftText>제목</LeftText>
      </Left>
      <SectionBar />
      <Right>
        <RightText>{props.nickname}</RightText>
        <RightText>{props.title}</RightText>
        <RightContent>{props.content}</RightContent>
      </Right>
    </ItemWrapper>
  );
};

export default ForumDetailContent;

const SectionBar = styled.a`
margin: 15px; 2vw 15px 0px;
  display: flex;
  background-color: #f6f8ff;
  border-style: none none none solid;
  border-color: #9381dd;
  border-width: 2px;
`;

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
  color: #9381dd;
`;

const RightText = styled.div`
  height: 20px;
  margin: 21.5px 20px 0px 0px;
  margin-right: 20px;
  text-align: left;
  font-size: 14px;
  font-weight: normal;
  color: #9381dd;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const RightContent = styled.div`
  margin: 21.5px 20px 20px 0px;
  text-align: left;
  font-size: 14px;
  font-weight: normal;
  color: #494949;
  overflow: hidden;
  //text-overflow: ellipsis;
  //display: -webkit-box;
  //-webkit-line-clamp: 4;
  //-webkit-box-orient: vertical;
`;
