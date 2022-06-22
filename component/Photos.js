import React from "react";

const Photos = ({ photos, loading }) => {
  return (
    <div>
      {loading && <div> loading... </div>}
      <ul>
        {photos.map((photo) => (
          <li key={photo.id}>
            {photo.title}
            <p></p>
            <img src={photo.url}></img>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Photos;
