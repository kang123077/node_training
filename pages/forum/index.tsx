import ForumHeaderContent from "../../component/ForumHeaderContent";
import ForumItemContent from "../../component/ForumItemContent";
import { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import axios from "axios";
import Pagination from "react-js-pagination";

const Forum = ({ list, pagination }) => {
  const [pathtext, setPathtext] = useState("Forum");
  const [page, setPage] = useState(1);
  const [numperpage, setNumperpage] = useState(5);
  const { push } = useRouter();

  const handlePageChange = (page) => {
    setPage(page);
    push(`forum?curPage=${page}`);
  };

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
      <Pagination
        activePage={page}
        itemsCountPerPage={numperpage}
        totalItemsCount={pagination.totalSize}
        pageRangeDisplayed={10}
        prevPageText={"‹"}
        nextPageText={"›"}
        onChange={handlePageChange}
      />
      <WriteButton>글쓰기</WriteButton>
    </div>
  );
};

Forum.getInitialProps = async ({ query }) => {
  console.log(query);
  const { curPage = 1, numPerPage = 5 } = query;
  const {
    data: { list, pagination },
  } = await axios.get("http://124.197.210.234:8188/bulletin/list", {
    params: {
      curPage: curPage,
      numPerPage: numPerPage,
    },
  });
  console.log(list, pagination);
  return { list: list, pagination: pagination };
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

const WriteButton = styled.button`
  position: fixed;
  width: 108px;
  height: 40px;
  font-size: 14px;
  right: 35px;
  bottom: 35px;
  background: #f6f8ff;
  border: 1px solid #9381dd;
  box-shadow: 2px 2px 4px rgba(116, 116, 116, 0.25);
  border-radius: 100px;

  &:active,
  &:hover,
  &:focus {
    cursor: pointer;
    background: #494949;
    color: white;
  }
`;
