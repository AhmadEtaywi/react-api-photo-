import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import MyContext from '../Context'
import './Albums.css'


function Albums() {
  const navigate = useNavigate();
  const [albums, setAlbums] = useState([])
  // const [error, setError] = useState(null);
  /* the error state above with the old fetch that i made without async await */
  const currentUser = useContext(MyContext);

  useEffect(() => {
    getAlbums(currentUser);
    // eslint-disable-next-line
  }, []);

  // const getAlbums = (user) => {
  //   const { id } = user;

  //   fetch(`https://jsonplaceholder.typicode.com/users/${id}/albums`)
  //     .then((Response) => Response.json())
  //     .then((albums) => {
  //       setAlbums(albums);
  //     })
  //     .catch((error) => {
  //       setError(error);
  //     });
  // };

  // if (error) {
  //   return <p>An error occurred: {error.message}</p>;
  // }
  const getAlbums = async (user) => {
      const { id } = user;

      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/albums`);
      const albums = await response.json();

      setAlbums(albums);
    };
  const showPhotos = (albums1) => {
    navigate(`/photos/?albums=${albums1}`);
  }
  return (

    <div className="main">
      {albums.map((albums) => (
        <div key={Math.random()} className="albums" >
          <div className="albums-Container">

            <p id={albums.id} onClick={() => showPhotos(albums.id)} >{albums.title} </p>
          </div>
        </div>
      )
      )
      }
    </div>

  )
}

export default Albums