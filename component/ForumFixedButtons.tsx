import styled from "styled-components";
import { useRouter } from "next/router";

const ForumFixedButtons = (props) => {
  const { push } = useRouter();

  const WrtieButtonOnclick = () => {
    push(`forum/write`);
  };
  return (
    <FixedButtonWrapper>
      {props.write ? (
        <FixedButton onClick={WrtieButtonOnclick}>글쓰기</FixedButton>
      ) : (
        <div></div>
      )}
      {props.modi ? <FixedButton>수정하기</FixedButton> : <div></div>}
      {props.check ? <FixedButton>확인</FixedButton> : <div></div>}
      {props.cancel ? <FixedButton>취소</FixedButton> : <div></div>}
    </FixedButtonWrapper>
  );
};

export default ForumFixedButtons;

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
