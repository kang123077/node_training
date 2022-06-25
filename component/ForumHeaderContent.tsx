import styled from "styled-components";

const ForumHeaderContent = (props) => {
  return (
    <div>
      <HeaderWrapper>
        <PathText>{props.pathtext}</PathText>
      </HeaderWrapper>
    </div>
  );
};

export default ForumHeaderContent;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  background-color: #363636;
  color: white;
  margin: 0px;
  padding: 0px;
`;

const PathText = styled.p`
  font-size: 16px;
`;
