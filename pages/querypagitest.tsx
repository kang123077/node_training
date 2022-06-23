import MyLayout from "../component/MyLayout";
import styled from "styled-components";
import { functionCalculator } from "../utils/functions";
import { useState } from "react";
import { useQuery } from "react-query";
import Querybanner from "../component/QueryBanner";
import Photos from "../component/Photos";

const Querypagitest = (props) => {
  const { data } = useQuery(
    "photos",
    async () =>
      await fetch("https://jsonplaceholder.typicode.com/photos").then(
        (result) => result.json()
      )
  );

  console.log(data);

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagelimit, setpageLimit] = useState(10);

  return (
    <div>
      <MyLayout>
        <Querybanner />
        <div className="grid-container">
          {data?.results?.map((photos) => (
            <article key={photos.id}>
              <img
                src={photos.url}
                alt={photos.title}
                loading="lazy"
              />
            </article>
          ))}
        </div>
      </MyLayout>
    </div>
  );
};

export default Querypagitest;

const Banner = styled.div`
  max-width: 1190px;
  min-width: 440px;
`;

const H1 = styled.h1`
  display: inline-block;
  width: 100%;
  font-size: 2em;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`;

const LimitButton = styled.button`
  position: relative;
  float: right;
  margin: 16px 0px 0px 10px;
`;
