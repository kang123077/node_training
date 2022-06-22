import React from "react";

const Posts = ({ posts, loading }) => {
  return (
    <div>
      {loading && <div> loading... </div>}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default Posts;
