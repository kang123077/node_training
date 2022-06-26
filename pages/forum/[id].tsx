import axios from "axios";
import ForumHeaderContent from "../../component/ForumHeaderContent";

const Post = ({ post }) => (
  <div>
    <ForumHeaderContent pathtext={post.id}/>
    <p>id</p>
    <p>{post.id}</p>
    <p>title</p>
    <p>{post.title}</p>
    <p>body</p>
    <p>{post.body}</p>
  </div>
);

Post.getInitialProps = async (context) => {
  const { id } = context.query;
  const { data: post } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return { post };
};

export default Post;
