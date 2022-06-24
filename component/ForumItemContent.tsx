import styled from "styled-components";
import Link from "next/link";

const ForumItemContent = (props) => {
  return (
    <Link href={`/post?id=${props.id}`}>
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
  width: 894px;
  height: 200px;
  background-color: #f6f8ff;
  border-style: none none none solid;
  border-color: #9381dd;
  border-width: 6px;
`;

const Left = styled.div`
  width: 100px;
  height: 100%;
`;

const Right = styled.div`
  width: 794px;
  height: 100%;
`;

const LeftText = styled.div`
  width: 80px;
  height: 20px;
  margin-top: 20px;
  text-align: right;
  font-size: 16px;
  font-weight: bold;
  color: #9381dd;
`;

const RightText = styled.div`
  width: 780px;
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
  width: 780px;
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
