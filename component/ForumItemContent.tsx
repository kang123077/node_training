import styled from "styled-components";
import Link from "next/link";

const ForumItemContent = (props) => {
  return (
    <Link href={`/post/${props.id}`}>
      <ItemWrapper>
        <Left>
          <LeftText>닉네임</LeftText>
          <LeftText>제목</LeftText>
        </Left>
        <Right>
          <RightText>{props.nickname}</RightText>
          <RightText>{props.title}</RightText>
          <RightContent>{props.content}</RightContent>
        </Right>
      </ItemWrapper>
    </Link>
  );
};

export default ForumItemContent;

const ItemWrapper = styled.a`
  display: flex;
  height: 23.5vh;
  background-color: #f6f8ff;
  border-style: none none none solid;
  border-color: #9381dd;
  border-width: 6px;
  cursor: pointer;
`;

const Left = styled.div`
  width: 11vw;
  height: 100%;
`;

const Right = styled.div`
  width: 79vw;
  height: 100%;
`;

const LeftText = styled.div`
  height: 20px;
  margin: 20px 20px 0px 0px;
  text-align: right;
  font-size: 16px;
  font-weight: bold;
  color: #9381dd;
`;

const RightText = styled.div`
  height: 20px;
  margin-top: 21.5px;
  text-align: left;
  font-size: 14px;
  font-weight: normal;
  color: #9381dd;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const RightContent = styled.div`
  height: 75px;
  margin-top: 21.5px;
  text-align: left;
  font-size: 14px;
  font-weight: normal;
  color: #494949;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4 ;
  -webkit-box-orient: vertical;
`;
