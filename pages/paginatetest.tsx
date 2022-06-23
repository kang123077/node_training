import MyLayout from "../component/MyLayout";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Photos from "../component/Photos";
import Pagination from "../component/Pagination";

function Paginatetest() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      setPosts(response.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  /* 새로 추가한 부분 */
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = (posts) => {
    let currentPosts = 0;
    currentPosts = posts.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };
  /*                 */

  return (
    <div className="App">
      <MyLayout>
        <h1>Paginationtest</h1>
        <Photos photos={currentPosts(posts)} loading={loading}></Photos>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={setCurrentPage}
        ></Pagination>
      </MyLayout>
    </div>
  );
}

export default Paginatetest;