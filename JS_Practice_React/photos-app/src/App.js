import React from 'react';

const photos = [
  {
    albumId: 1,
    id: 1,
    title: "green",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952"
  },
  {
    albumId: 1,
    id: 2,
    title: "purple",
    url: "https://via.placeholder.com/600/771796",
    thumbnailUrl: "https://via.placeholder.com/150/771796"
  },
];

const Photo = ({ title, url, thumbnailUrl }) => (
    <div className="photo">
      <h3>{title}</h3>
      <img src={thumbnailUrl} alt={title} />
    </div>
);

const PhotoList = ({ photos }) => (
    <div className="photo-list">
      {photos.map(photo => (
          <Photo
              key={photo.id}
              title={photo.title}
              url={photo.url}
              thumbnailUrl={photo.thumbnailUrl}
          />
      ))}
    </div>
);

const App = () => (
    <div className="App">
      <h1>Photo List</h1>
      <PhotoList photos={photos} />
    </div>
);

export default App;
