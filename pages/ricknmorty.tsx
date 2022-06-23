import { useQuery } from "react-query";
import { useRouter } from "next/router";
import { useState } from "react";
import MyLayout from "../component/MyLayout";
import Pagination from "@mui/lab/Pagination";
import { hydrate, dehydrate, QueryClient } from "react-query";

export default function PaginationPage(props) {
  const [page, setPage] = useState(1);
  const router = useRouter();

  const { data } = useQuery(
    ["characters", page],
    async () =>
      await fetch(
        `https://rickandmortyapi.com/api/character/?page=${page}`
      ).then((result) => result.json())
  );

  function handlePaginationChange(e, value) {
    setPage(value);
    router.push(`pagination/?page=${value}`, undefined, { shallow: true });
  }

  return (
    <MyLayout>
      <h1>Rick and Morty</h1>
      <div className="grid-container">
        {data?.results?.map((character) => (
          <article key={character.id}>
            <img
              src={character.image}
              alt={character.name}
              height={200}
              loading="lazy"
              width={200}
            />
            <div className="text">
              <p>Name: {character.name}</p>
              <p>Lives in: {character.location.name}</p>
              <p>Species: {character.species}</p>
              <i>Id: {character.id} </i>
            </div>
          </article>
        ))}
      </div>
      <Pagination
        count={data?.info.pages}
        variant="outlined"
        color="primary"
        className="pagination"
      />
    </MyLayout>
  );
}

export async function getServerSideProps(context) {
  let page = 1;
  if (context.query.page) {
    page = parseInt(context.query.page);
  }
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(
    ["characters", page],
    async () =>
      await fetch(
        `https://rickandmortyapi.com/api/character/?page=${page}`
      ).then((result) => result.json())
  );
  return { props: { dehydratedState: dehydrate(queryClient) } };
}
