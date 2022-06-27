import axios from "axios";
import ForumHeaderContent from "../../component/ForumHeaderContent";
import ForumDetailContent from "../../component/ForumDetailContent";
import ForumPreProContent from "../../component/ForumPreProContent";
import ForumFixedButtons from "../../component/ForumFixedButtons";
import ForumWriteContent from "../../component/ForumWriteContent";
import styled from "styled-components";

const Write = () => (
  <div>
    <ForumHeaderContent pathtext="글쓰기" />
    <WriteWrapper>
      <ForumWriteContent></ForumWriteContent>
    </WriteWrapper>
    <ForumFixedButtons confirm="씀" cancel="씀" />
  </div>
);

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

export default Write;
