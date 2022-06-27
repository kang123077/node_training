import axios from "axios";
import ForumHeaderContent from "../../component/ForumHeaderContent";
import ForumDetailContent from "../../component/ForumDetailContent";
import ForumPreProContent from "../../component/ForumPreProContent";
import ForumFixedButtons from "../../component/ForumFixedButtons";
import ForumWriteContent from "../../component/ForumWriteContent";
import styled from "styled-components";
import { encrypt } from "../../utils/encrypt";

const CancleButtonOnclick = () => {
  location.href = "http://localhost:3000/forum";
};

const ConfirmButtonClick = () => {};

const Write = () => {
  console.log(encrypt("1234"));

  return (
    <div>
      <ForumHeaderContent pathtext="글쓰기" />
      <WriteWrapper>
        <ForumWriteContent></ForumWriteContent>
      </WriteWrapper>
    </div>
  );
};

export default Write;

const PreProWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3.6vw;
  margin: 40px 0px 0px 0px;
`;

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px 0px 50px 0px;
`;

const WriteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px 0px 50px 0px;
`;
