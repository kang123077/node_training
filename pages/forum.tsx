import MyLayout from "../component/MyLayout";
import ForumHeaderContent from "../component/ForumHeaderContent";
import { useState } from "react";
import Link from "next/link";
import ForumItemContent from "../component/ForumItemContent";
import styled from "styled-components";

const posts = [
  {
    id: 1,
    nickname: "성경 도배맨",
    title: "옆집 누나랑 술마시다 실수한 썰 1",
    content: "#1 content",
  },
  {
    id: 2,
    nickname:
      "성경 도배맨도배맨도배맨도배맨도배맨도배맨도배맨도배맨도배맨도배맨도배맨도배맨도배맨도배맨도배맨도배맨도배맨도배맨도배맨",
    title: "옆집 누나랑 술마시다 실수한 썰 2",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. sunt in culpa qui officia deserunt mollit anim id est laborum. sunt in culpa qui officia deserunt mollit anim id est laborum. sunt in culpa qui officia deserunt mollit anim id est laborum. sunt in culpa qui officia deserunt mollit anim id est laborum. sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 3,
    nickname: "성경 도배맨",
    title: "옆집 누나랑 술마시다 실수한 썰 3",
    content: "#3 content",
  },
  {
    id: 4,
    nickname: "성경 도배맨",
    title: "옆집 누나랑 술마시다 실수한 썰 4",
    content: "#4 content",
  },
  {
    id: 5,
    nickname: "성경 도배맨",
    title: "옆집 누나랑 술마시다 실수한 썰 5",
    content: "#5 content",
  },
];

const PostList = () => (
  <>
    {posts.map((data, index) => {
      return (
        <ForumItemContent
          id={data.id}
          nickname={data.nickname}
          title={data.title}
          content={data.content}
          key={index}
        />
      );
    })}
  </>
);

const Forum = () => {
  const [pathtext, setPathtext] = useState("Forum");

  return (
    <div>
      <ForumHeaderContent pathtext={pathtext} />
      <ItemListContent>
        <PostList />
      </ItemListContent>
    </div>
  );
};

export default Forum;

const ItemListContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  margin-top: 50px;
`;
