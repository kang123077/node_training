import ForumHeaderContent from "../component/ForumHeaderContent";
import { useRouter } from "next/router";
import MyLayout from "../component/MyLayout";

export type postsType = {
  id: number;
  title: string;
  content: string;
};

const posts = [
  {
    id: 1,
    nickname: "성경 도배맨",
    title: "옆집 누나랑 술마시다 실수한 썰 1",
    content: "#1 content",
  },
  {
    id: 2,
    nickname: "성경 도배맨",
    title: "옆집 누나랑 술마시다 실수한 썰 2",
    content: "#2 content",
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

const Content = () => {
  const router = useRouter();

  const post = posts[router.query.id - 1];
  const nickname = post.nickname;
  const title = post.title;
  const content = post.content;

  return (
    <>
      <h1>{title}</h1>
      <p>{nickname}</p>
      <p>{content}</p>
    </>
  );
};

const Post = (props) => {
  return (
    <div>
      <ForumHeaderContent />
      <Content />
    </div>
  );
};

export default Post;
