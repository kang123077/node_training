import React from "react";

const Photos = ({ photos, loading }) => {
  return (
    <div>
      {loading && <div> loading... </div>}
      <ul>
        {photos.map((photo) => (
          <li key={photo.id}>{photo.title}</li>
        ))}
      </ul>
      <ul>
        {photos.map((photo) => (
          <li key={photo.id}>{photo.url}</li>
        ))}
      </ul>
    </div>
  );
};
export default Photos;
