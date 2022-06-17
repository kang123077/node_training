import Layout from "../../component/MyLayout";

const Post = (props) => {
  const {v1, v2, sum} = props;

  return (
    <Layout>
      <p>{v1}</p>
      <p>{v2}</p>
      <p>{sum}</p>
      <p>This is the blog post content.</p>
    </Layout>
  );
};

export const getServerSideProps = ({req, res, query}) => {
  const {v1, v2} = query;
  return {
    props: {
      v1: v1,
      v2: v2,
      sum: +v1 + +v2,
    },
  };
};

export default Post;
