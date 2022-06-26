import ForumHeaderContent from "../../component/ForumHeaderContent";
import ForumItemContent from "../../component/ForumItemContent";
import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Forum = ({ posts }) => {
  const [pathtext, setPathtext] = useState("Forum");

  return (
    <div>
      <ForumHeaderContent pathtext={pathtext} />
      <ItemListContent>
        {posts.map((post) => (
          <ForumItemContent
            key={post.id}
            id={post.id}
            nickname={post.id}
            title={post.title}
            content={post.body}
          />
        ))}
      </ItemListContent>
    </div>
  );
};

Forum.getInitialProps = async () => {
  const { data: posts } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log("data loaded");
  console.log(posts);
  return { posts };
};

export default Forum;

const ItemListContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin: 50px 0px 50px 0px;
`;
