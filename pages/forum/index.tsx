import ForumHeaderContent from "../../component/ForumHeaderContent";
import ForumItemContent from "../../component/ForumItemContent";
import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Forum = ({ list }) => {
  const [pathtext, setPathtext] = useState("Forum");

  return (
    <div>
      <ForumHeaderContent pathtext={pathtext} />
      <ItemListContent>
        {list.map((list) => (
          <ForumItemContent
            key={list.id}
            id={list.id}
            nickname={list.nickName}
            title={list.title}
            content={list.content}
          />
        ))}
      </ItemListContent>
    </div>
  );
};

Forum.getInitialProps = async () => {
  const {
    data: { list, pagination },
  } = await axios.get("http://124.197.210.234:8188/bulletin/list");
  console.log(list, pagination);
  return { list: list };
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
