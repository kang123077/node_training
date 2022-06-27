import axios from "axios";
import ForumHeaderContent from "../../component/ForumHeaderContent";
import ForumDetailContent from "../../component/ForumDetailContent";
import ForumPreProContent from "../../component/ForumPreProContent";
import ForumFixedButtons from "../../component/ForumFixedButtons";
import styled from "styled-components";

const Post = ({ detail, next, prev }) => (
  <div>
    <ForumHeaderContent pathtext={detail.id} />
    <DetailWrapper>
      <ForumDetailContent
        nickname={detail.nickName}
        title={detail.title}
        content={detail.content}
      />
      <PreProWrapper>
        {prev ? (
          <ForumPreProContent
            prepro={"이전 글"}
            id={prev.id}
            nickname={prev.nickname}
            title={prev.title}
            content={prev.content}
          />
        ) : (
          <div></div>
        )}
        {next ? (
          <ForumPreProContent
            prepro={"다음 글"}
            id={next.id}
            nickname={next.nickname}
            title={next.title}
            content={next.content}
          />
        ) : (
          <div></div>
        )}
      </PreProWrapper>
    </DetailWrapper>
    <ForumFixedButtons write2="씀" modi="씀" />
  </div>
);

Post.getInitialProps = async (context) => {
  const { id } = context.query;
  const {
    data: { detail, next, prev },
  } = await axios.get(`http://124.197.210.234:8188/bulletin/${+id}`);
  console.log(detail, next, prev);
  return { detail: detail, next: next, prev: prev };
};

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

export default Post;
