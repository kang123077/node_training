import MyLayout from "../component/MyLayout";
import { useQuery } from "react-query";

export default function PaginationPage(props) {
  const { data } = useQuery(
    "characters",
    async () =>
      await fetch(`https://rickandmortyapi.com/api/character/`).then((result) =>
        result.json()
      )
  );

  console.log(data);

  return (
    <MyLayout>
      <div className="grid-container">
        <h1>Rick and Morty</h1>
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
    </MyLayout>
  );
}
